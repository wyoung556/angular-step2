(function() {
    "use strict";

    var angularStep2App = angular.module("angularStep2App", []);

    angularStep2App.controller("angularStep2Controller", ["$scope",
        function($scope) {
            $scope.firstNumber = 1;
            $scope.secondNumber = 1;
            $scope.thirdNumber = function() { return parseFloat($scope.firstNumber) + parseFloat($scope.secondNumber); };
            $scope.isValid = function() {
                return $scope.firstNumber !== '' &&
                    !isNaN(parseFloat($scope.firstNumber)) &&
                    $scope.secondNumber !== '' &&
                    !isNaN(parseFloat($scope.secondNumber));
            };
        }
    ]);
})();