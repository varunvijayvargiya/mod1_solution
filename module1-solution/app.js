(function(){
'use strict';

angular.module("LunchCheck",[])
.controller("LunchCheckController",LunchCheckController);

LunchCheckController.$inject=['$scope'];

function LunchCheckController($scope){
  $scope.lunchItems="";
  $scope.resultMessage="";

  $scope.onBtnClick = function() {
    var numOfItems=$scope.lunchItems.split(',').length;
    console.log(numOfItems);
    if ($scope.lunchItems == "") {
      $scope.resultMessage="Please enter data first";
    }
    else if (numOfItems <= 3) {
      $scope.resultMessage="Enjoy!";
    }
    else {
      $scope.resultMessage="Too much!";
    }
  };
}

})();
