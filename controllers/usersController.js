app.controller('usersController', function ($scope, API) {
    API.getUsers().then(function (user) {
        $scope.users = user;
    });
    /*$scope.users = [];*/
    $scope.userId = function (user){
        $scope.id = user.id;
        /*console.log(user);*/
    };

    /*$scope.id = user.id*/

});
