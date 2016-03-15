(function () {
    angular
        .module('app')
        .controller('UsageController', [
            UsageController
        ]);

    function UsageController() {
        var vm = this;

        // TODO: move data to the service
        vm.ramChartData = [{key: '', y: 13}];
        vm.storageChartData = [{key: '', y: 2643}];

        vm.chartOptions = {
            chart: {
                type: 'pieChart',
                height: 10,

                donut: true,
                x: function (d) { return d.key; },
                y: function (d) { return d.y; },
                valueFormat: (d3.format(".0f")),
                color: ['rgb(255, 255, 255)'],
                showLabels: false,
                showLegend: false,
                //title: '13',
                margin: { top: -10, left: -20, right: -20 }
            }
        };
        vm.chartOptions2 = {
            chart: {
                type: 'pieChart',
                height: 10,
                donut: true,
                x: function (d) { return d.key; },
                y: function (d) { return d.y; },
                valueFormat: (d3.format(".0f")),
                color: ['rgb(255, 255, 255)'],
                showLabels: false,
                showLegend: false,
                //title: '3K',
                margin: { top: -10, left: -20, right: -20 }
            }
        };

    }
})();
