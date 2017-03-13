/**
 * Created by Alankritha on 3/7/17.
 */
var app = angular.module("app",[]);

app.controller('AppCtrl', function($scope,$http){
    console.log("Hello from controller");
    var refresh = function() {
        $http.get('/contactList').success(function (response) {
            console.log("I got the data requested");
            $scope.contactList = response;
            $scope.contact="";
        });
    };
     refresh();
    $scope.addContact = function(){
        console.log("Add button is clicked");
        console.log($scope.contact);
        $http.post('/contactList',$scope.contact).success(function(response){
            console.log(response);
            refresh();
        });
    };
    $scope.remove = function(id){
      console.log(id);
       $http.delete('/contactList/' + id).success(function(response){
           refresh();

       });
    };

    $scope.edit = function(id){
      console.log(id);
      $http.get('/contactList/' + id).success(function(response) {
          console.log(response);
        $scope.contact.name = response;
      });
    };



});