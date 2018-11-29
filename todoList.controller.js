"use strict";

angular.module('todoList.controller',[]).controller('todoController', function($scope){
    $scope.newTask = "";
    $scope.performancer = "";
    $scope.prioritet = "";
    
    $scope.taskList = [];
    
    $scope.addTodo = function(){
        $scope.taskList.push({description: $scope.newTask, human: $scope.performancer, number: $scope.prioritet});
        
        $scope.newTask="";
        $scope.performancer = "";
        $scope.prioritet = "";
    };
    
   $scope.deleteTodo = function(index) {
       $scope.taskList.splice(index, 1);
   }
   
   $scope.prioritetUp = function (answer){
        answer.number++;
    };
    
    $scope.prioritetDown = function (answer){
        answer.number--;
    };
    
    $scope.isPrioritetUp = function(task) {
        if (task.number>9)
            return true;
        else
            return false;
    };
    
        $scope.isPrioritetDown = function(task) {
        if (task.number<2)
            return true;
        else 
            return false;
    };
        
        
});