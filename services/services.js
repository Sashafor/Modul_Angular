app.service('API', function ($http, $q) {
    return {
        getUsers: function () {
            var d = $q.defer();
            $http({
                method: 'GET',
                url: 'https://api.github.com/users'
            }).then(function (data) {
                var users = data.data;
                d.resolve(users);
                /*console.log(users)*/
            });
            return d.promise
        },
        getUser: function (id) {
            var d = $q.defer();
            var url = "https://api.github.com/users/"+ id +"";
            $http({
                method: 'GET',
                url: url
            }).then(function (data) {
                d.resolve(data.data);
                console.log(data.data)
            });
            return d.promise
        }
    }
});