(function () {
'use strict';

angular.module('LunchApp', [])

.controller('LunchAppController', function ($scope) {

  $scope.check = function () {
  	$scope.message="";
  	
  	var counter=0;
    var value =  $scope.value;
  //  console.log(typeof(value));
    if(!value){
  		$scope.message= "Please enter data first";
  		return;
  		}
    value = value.split(',');
    
    for(var v=0;v<value.length;v++)
    	if(value[v].trim().length!=0)
    		counter++;
    	 
    if(counter<=3)
    	$scope.message="Enjoy!";
    else $scope.message = "Too much!";

    return;
    
  };

});


})();
