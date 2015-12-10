'use strict';

angular.module('includeTools',[])
    .controller('includeCtrl', ['$scope', function($scope) {
        $scope.templates =
            [ { name: 'dumpandsort', url: 'tools/dumpandsort.html'},
            ];
        $scope.template = $scope.templates[0];
        $scope.tool = 'default';
        $scope.turnoff = function(){
            $scope.tool = 'default';
        };
    }]);
