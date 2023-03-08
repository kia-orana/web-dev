(function (){
'use strict';

angular.module('LunchCheck',[])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject= ['$scope'];
function LunchCheckController($scope) {
    $scope.dishes = "";
    $scope.message = "";
    $scope.checkDishes = function () {
        var dishes = $scope.dishes.split(',').filter(s => s.trim());
        if(dishes && dishes.length){
            $scope.textStyle = {color: 'green'};
            $scope.boxStyle = {border: '1px solid green'};
            if (dishes.length <= 3){
                $scope.message = "Enjoy!";
            } else {
                $scope.message = "Too much!";
            }
        } else {
            $scope.message = "Please enter data first";
            $scope.textStyle = {color: 'red'};
            $scope.boxStyle = {border: '1px solid red'};
        }
    };
}

})();