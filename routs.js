app.config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'templates/users.html',
        controller: 'usersController'
    }).when('/user', {
        controller: 'userController',
        templateUrl: 'templates/user.html'
    })
});
