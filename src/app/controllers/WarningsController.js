(function () {
    angular
        .module('app')
        .controller('WarningsController', [
            WarningsController
        ]);

    function WarningsController() {
        var vm = this;

        // TODO: move data to the service
        vm.warningsChartData = [ {key: 'Voice Only', y: 3543}, { key: 'Unified Communications', y: 2987},{ key: 'Contact Center', y: 2360} ];

        vm.chartOptions = {
            chart: {
                type: 'pieChart',
                height: 210,
                donut: true,
                x: function (d) { return d.key; },
                y: function (d) { return d.y; },
                valueFormat: (d3.format(".0f")),
                color: ['#4265a9', '#4ca6a9','#4c6079'],
                showLabels: false,
                showLegend: true,
                title: '9K',
                margin: { top: -10 }
            }
        };
    }
})();

//(function () {
//    angular
//        .module('app')
//        .controller('WarningsController', [
//            WarningsController
//        ]);
//
//    function WarningsController() {
//        var vm = this;
//
//        // TODO: move data to the service
//        vm.warningsChartData = warningFunction;
//
//        function warningFunction() {
//            var sin = [];
//            for (var i = 0; i < 100; i++) {
//                sin.push({x: i, y: Math.abs(Math.cos(i/10) *0.25*i + 0.9 - 0.4*i)});
//            }
//            return [ { values: sin, color: 'rgb(0, 150, 136)', area: true } ];
//        }
//
//        vm.chartOptions = {
//            chart: {
//                type: 'lineChart',
//                height: 210,
//                margin: { top: -10, left: -20, right: -20 },
//                x: function (d) { return d.x },
//                y: function (d) { return d.y },
//                showLabels: false,
//                showLegend: false,
//                title: 'Over 9K',
//                showYAxis: false,
//                showXAxis: false,
//                tooltip: { contentGenerator: function (d) { return '<span class="custom-tooltip">' + Math.round(d.point.y) + '</span>' } }
//            }
//        };
//    }
//})();
