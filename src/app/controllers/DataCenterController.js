(function () {
    angular
        .module('app')
        .controller('DataCenterController', ['$rootScope', '$scope', 'NgMap', '$http', '$mdDialog','$mdMedia',
            DataCenterController
        ]);

    function DataCenterController($rootScope, $scope, NgMap, $http, $mdDialog,$mdMedia) {

        var vm = this;
        vm.isShowMap = true;
        vm.isShowGrid = false;

        NgMap.getMap().then(function (map) {
            console.log('map', map);
            vm.map = map;
        });

        vm.showAlertWindow = function (ev, alert) {
            $mdDialog.show(
                $mdDialog.alert()
                    .parent(angular.element(document.querySelector('#alertView')))
                    .clickOutsideToClose(true)
                    .title('Proposed Solution')
                    .content(alert.proposedSolution + "\n")
                    .ariaLabel('Proposed Solution')
                    .ok('Confirm')
                    .targetEvent(ev)
            );
        };

        function DialogController($scope, $mdDialog,alertInfo) {
            console.log('alert ' + alertInfo.id)
            $scope.alertInfo =  alertInfo;
            $scope.hide = function() {
                $mdDialog.hide();
            };
            $scope.cancel = function() {
                $mdDialog.cancel();
            };
            $scope.answer = function(answer) {
                $mdDialog.hide(answer);
            };
        }

        $scope.showFullAlertWindow = function(ev, alert) {
            //vm.currentAlert = alert;
            console.log('test ' + alert.id)
            var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'))  && $scope.customFullscreen;
            $mdDialog.show({
                controller: DialogController,
                templateUrl: 'app/views/AlertWindow.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose:true,
                fullscreen: useFullScreen,
                locals: {
                    alertInfo: alert
                }
            })
                .then(function(answer) {
                    $scope.status = 'You said the information was "' + answer + '".';
                }, function() {
                    $scope.status = 'You cancelled the dialog.';
                });
            $scope.$watch(function() {
                return $mdMedia('xs') || $mdMedia('sm');
            }, function(wantsFullScreen) {
                $scope.customFullscreen = (wantsFullScreen === true);
            });
        };


        vm.loadData = function () {
            delete vm.dcList;

            $http({
                method: 'GET',
                url: '/app/dc_api_mock.json'
            }).then(function successCallback(response) {
                // this callback will be called asynchronously
                console.log('!!! using mocked api data. change the url to live api.')
                vm.dcList = response.data;
                vm.dc = vm.dcList[0];
                // when the response is available
            }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                console.log('unable to load data center data.')
            });
        }

        vm.showMapView = function () {
            vm.isShowMap = true;
            vm.isShowGrid = false;
            vm.dcList = [];
            vm.loadData();

        }

        vm.showGridView = function () {
            vm.isShowGrid = true;
            vm.isShowMap = false;
            vm.dcList = [];
            vm.loadData();

        }
        vm.dcList = [];

        vm.showDetail = function (e, dc) {
            vm.dc = dc;
            vm.map.showInfoWindow('foo-iw', dc.id);
        };

        vm.hideDetail = function () {
            vm.map.hideInfoWindow('foo-iw');
        };

        vm.showAlertView = function (dcData) {
            vm.isShowGrid = false;
            vm.isShowMap = false;
            console.log('show alert list for ' + dcData.id);
            vm.dc = dcData;

        }
        vm.loadData();
    }

})();

