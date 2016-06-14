(function () {
    angular
        .module('app')
        .controller('DevicesController', [
            DevicesController
        ]);

    function DevicesController() {
        var vm = this;

        // TODO: move data to the service
        vm.devicesChartData = [{
            "name": "Servers",
            "children": [
                {
                    "name": "HP",
                    "children": [
                        {"name": "DL380",
                            "children": [
                                {"name": "G6", "size": 122},
                                {"name": "G7", "size": 77},
                                {"name": "G8", "size": 203},
                                {"name": "G9", "size": 277}]
                                },
                        {"name": "DL360",
                            "children": [
                                {"name": "G8", "size": 248},
                                {"name": "G9", "size": 522}]

                        },
                        {"name": "BL460c",
                            "children": [
                                {"name": "G3", "size": 15},
                                {"name": "G5", "size": 40},
                                {"name": "G6", "size": 137},
                                {"name": "G7", "size": 356},
                                {"name": "G8", "size": 505},
                                {"name": "G9", "size": 477}]
                        },
                    ]

                    //"children": [
                    //    {
                    //        "name": "cluster",
                    //        "children": [
                    //            {"name": "AgglomerativeCluster", "size": 3938},
                    //            {"name": "CommunityStructure", "size": 3812},
                    //            {"name": "HierarchicalCluster", "size": 6714},
                    //            {"name": "MergeEdge", "size": 743}
                    //        ]
                    //    },
                    //    {
                    //        "name": "graph",
                    //        "children": [
                    //            {"name": "BetweennessCentrality", "size": 3534},
                    //            {"name": "LinkDistance", "size": 5731},
                    //            {"name": "MaxFlowMinCut", "size": 7840},
                    //            {"name": "ShortestPaths", "size": 5914},
                    //            {"name": "SpanningTree", "size": 3416}
                    //        ]
                    //    },
                    //    {
                    //        "name": "optimization",
                    //        "children": [
                    //            {"name": "AspectRatioBanker", "size": 7074}
                    //        ]
                    //    }
                    //]
                },
                {
                    "name": "DELL","size": 759,
                    "children": [
                        {"name": "T110", "size": 87},
                        {"name": "R515", "size": 220},
                        {"name": "M910", "size": 150},
                        {"name": "C1100", "size": 302}
                    ]

                    //"children": [
                    //    {"name": "Easing", "size": 17010},
                    //    {"name": "FunctionSequence", "size": 5842},
                    //    {
                    //        "name": "interpolate",
                    //        "children": [
                    //            {"name": "ArrayInterpolator", "size": 1983},
                    //            {"name": "ColorInterpolator", "size": 2047},
                    //            {"name": "DateInterpolator", "size": 1375},
                    //            {"name": "Interpolator", "size": 8746},
                    //            {"name": "MatrixInterpolator", "size": 2202},
                    //            {"name": "NumberInterpolator", "size": 1382},
                    //            {"name": "ObjectInterpolator", "size": 1629},
                    //            {"name": "PointInterpolator", "size": 1675},
                    //            {"name": "RectangleInterpolator", "size": 2042}
                    //        ]
                    //    },
                    //    {"name": "ISchedulable", "size": 1041},
                    //    {"name": "Parallel", "size": 5176},
                    //    {"name": "Pause", "size": 449},
                    //    {"name": "Scheduler", "size": 5593},
                    //    {"name": "Sequence", "size": 5534},
                    //    {"name": "Transition", "size": 9201},
                    //    {"name": "Transitioner", "size": 19975},
                    //    {"name": "TransitionEvent", "size": 1116},
                    //    {"name": "Tween", "size": 6006}
                    //]
                },
                {
                    "name": "IBM","size": 420,
                    "children": [
                        {"name": "HX5", "size": 420}
                    ]

                    //"children": [
                    //    {
                    //        "name": "converters",
                    //        "children": [
                    //            {"name": "Converters", "size": 721},
                    //            {"name": "DelimitedTextConverter", "size": 4294},
                    //            {"name": "GraphMLConverter", "size": 9800},
                    //            {"name": "IDataConverter", "size": 1314},
                    //            {"name": "JSONConverter", "size": 2220}
                    //        ]
                    //    },
                    //    {"name": "DataField", "size": 1759},
                    //    {"name": "DataSchema", "size": 2165},
                    //    {"name": "DataSet", "size": 586},
                    //    {"name": "DataSource", "size": 3331},
                    //    {"name": "DataTable", "size": 772},
                    //    {"name": "DataUtil", "size": 3322}
                    //]
                }
            ]
        }
        ];


        vm.chartOptions =
        {
            chart: {
                type: 'sunburstChart',
                height: 210,
                color: d3.scale.category20b(),
                duration: 350,
                showLegend: true,
                margin: { top: 10, left: -20, right: -20 }
            }
        };
        //{
        //    "chart": {
        //        "type": "sunburstChart",
        //            "height": 200,
        //            "duration": 250,
        //            "dispatch": {},
        //        "sunburst": {
        //            "dispatch": {},
        //            "width": null,
        //                "height": null,
        //                "mode": "count",
        //                "id": 5563,
        //                "duration": 500,
        //                "margin": {
        //                "top": 0,
        //                    "right": 0,
        //                    "bottom": 0,
        //                    "left": 0
        //            }
        //        },
        //        "tooltip": {
        //            "duration": 0,
        //                "gravity": "w",
        //                "distance": 25,
        //                "snapDistance": 0,
        //                "classes": null,
        //                "chartContainer": null,
        //                "fixedTop": null,
        //                "enabled": true,
        //                "hideDelay": 400,
        //                "headerEnabled": false,
        //                "position": {
        //                "left": 926,
        //                    "top": 395
        //            },
        //            "offset": {
        //                "left": 0,
        //                    "top": 0
        //            },
        //            "hidden": true,
        //                "data": null,
        //                "tooltipElem": null,
        //                "id": "nvtooltip-88797"
        //        },
        //        "width": null,
        //            "mode": "count",
        //            "margin": {
        //            "top": 30,
        //                "right": 20,
        //                "bottom": 20,
        //                "left": 20
        //        },
        //        "noData": null,
        //            "defaultState": null
        //    },
        //    "title": {
        //        "enable": false,
        //            "text": "Write Your Title",
        //            "className": "h4",
        //            "css": {
        //            "width": "nullpx",
        //                "textAlign": "center"
        //        }
        //    },
        //    "subtitle": {
        //        "enable": false,
        //            "text": "Write Your Subtitle",
        //            "css": {
        //            "width": "nullpx",
        //                "textAlign": "center"
        //        }
        //    },
        //    "caption": {
        //        "enable": false,
        //            "text": "Figure 1. Write Your Caption text.",
        //            "css": {
        //            "width": "nullpx",
        //                "textAlign": "center"
        //        }
        //    },
        //    "styles": {
        //        "classes": {
        //            "with-3d-shadow": true,
        //                "with-transitions": true,
        //                "gallery": false
        //        },
        //        "css": {}
        //    }
        //};
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
