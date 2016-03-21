angular.module('rmaApp', ['nvd3']);

.controller('MainCtrl', function($scope) {
  $scope.options = {
            chart: {
                type: 'discreteBarChart',
                height: 500,
                margin : {
                    top: 20,
                    right: 20,
                    bottom: 50,
                    left: 55
                },
                x: function(d){return d.label;},
                y: function(d){return d.value + (1e-10);},
                showValues: true,
                valueFormat: function(d){
                    return d3.format(',.4f')(d);
                },
                duration: 500,
                xAxis: {
                    axisLabel: 'X Axis'
                },
                yAxis: {
                    axisLabel: 'Y Axis',
                    axisLabelDistance: -10
                }
            }
        };

        $scope.data = [
            {
                key: "Cumulative Return",
                values: [
                    {
                        "label" : "S1CP1" ,
                        "value" : 91
                    } ,
                    {
                        "label" : "S1CP2" ,
                        "value" : 90
                    } ,
                    {
                        "label" : "S1CPP" ,
                        "value" : 89
                    } ,
                    {
                        "label" : "S1FC1" ,
                        "value" : 80
                    } ,
                    {
                        "label" : "S1M1" ,
                        "value" : 75
                    } ,
                    {
                        "label" : "S1M2" ,
                        "value" : 70
                    } ,
                    {
                        "label" : "S1S1" ,
                        "value" : 88
                    } ,
                    {
                        "label" : "S1S2" ,
                        "value" : 60
                    },
                    {
                        "label" : "S1SP" ,
                        "value" : 82
                    }
                ]
            }
        ]
});
