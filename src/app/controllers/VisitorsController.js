(function () {
    angular
        .module('app')
        .controller('VisitorsController', [
            VisitorsController
        ]);

    function VisitorsController() {
        var vm = this;

        // TODO: move data to the service
        vm.visitorsChartData = [ {key: 'Critical', y: 2}, { key: 'Warning', y: 9},{ key: 'Informative', y: 17} ];

        vm.chartOptions = {
            chart: {
                type: 'pieChart',
                height: 210,
                donut: true,
                x: function (d) { return d.key; },
                y: function (d) { return d.y; },
                valueFormat: (d3.format(".0f")),
                color: ['#E75753', '#d48900','rgb(0, 150, 136)'],
                showLabels: false,
                showLegend: true,
                title: '28',
                margin: { top: -10 }
            }
        };
    }
})();
