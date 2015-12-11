'use strict';

angular.module('includeTools',[])
    .controller('includeCtrl', ['$scope', function($scope) {
        $scope.tool = 'default';
        $scope.turnoff = function(){
            $scope.tool = 'default';
        };
    }]);
