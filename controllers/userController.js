app.controller('userController', function ($scope, API) {
        API.getUser($scope.userId).then(function (user) {
            $scope.userPage = user;
            console.log(user.name);
        });



});

