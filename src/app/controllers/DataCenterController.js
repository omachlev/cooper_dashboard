(function () {
    angular
        .module('app')
        .controller('DataCenterController', [ '$rootScope','$scope','NgMap','$http',
            DataCenterController
        ]);

    function DataCenterController($rootScope,$scope, NgMap,$http) {

        var vm = this;
        vm.isShowMap = true;
        vm.isShowGrid = false;

        NgMap.getMap().then(function(map) {
            console.log('map', map);
            vm.map = map;
        });

        vm.clicked = function() {
            alert('add code to redirect to data center detailed view');
        };

        vm.loadData = function (){
            delete vm.dcList ;

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


        vm.showMapView = function(){
            vm.isShowMap = true;
            vm.isShowGrid = false;
            vm.dcList = [];
            vm.loadData();

        }

        vm.showGridView = function(){
            vm.isShowGrid = true;
            vm.isShowMap = false;
            vm.dcList = [];
            vm.loadData();

        }
        vm.dcList = [];

        vm.showDetail = function(e, dc) {
            vm.dc = dc;
            vm.map.showInfoWindow('foo-iw', dc.id);
        };

        vm.hideDetail = function() {
            vm.map.hideInfoWindow('foo-iw');
        };

        vm.loadData();
    }

})();

