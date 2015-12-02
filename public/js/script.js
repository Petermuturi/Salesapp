var AuthApp = angular.module('app',[]);

AuthApp.ng-controller('Main',function($scope, $http){
        $scope.loginUser = function(result){
                $http.get("https://localhost:8080/login?username="+ $scope.username + "password=" +$scope.password)
                .success(function(data) {
                        $scope.user = data;
                })
                .error(function(data) {
                        // called asynchronously if an error occurs
                        // or server returns response with an error status.
                });
        };

});
