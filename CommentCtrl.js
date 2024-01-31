let component = angular.module('myApp',['ngRoute']);



component.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl: 'views/home.html',
            controller :'CommentsCtrl'
        })
        .when('/salut', {
            templateUrl: 'views/salut.html'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);



component.controller('CommentsCtrl',function($scope){
    $scope.comments = [{
        "username" : "Maxime",
        "city" : "Paris",
        "email" : "maxime.prevot1804kz@gmail.com",
        "content" : "Salut"
    },
    {
        "username" : "Maxime",
        "city" : "Paris",
        "email" : "maxime.prevot1804kz@gmail.com",
        "content" : "Salut"
    },
    {
        "username" : "Maxime",
        "city" : "Paris",
        "email" : "maxime.prevot1804kz@gmail.com",
        "content" : "Salut"
    },
    {
        "username" : "Maxime",
        "city" : "Paris",
        "email" : "maxime.prevot1804kz@gmail.com",
        "content" : "Salut"
    },
    {
        "username" : "Maxime",
        "city" : "Paris",
        "email" : "maxime.prevot1804kz@gmail.com",
        "content" : "Salut"
    },
    {
        "username" : "Maxime",
        "city" : "Paris",
        "email" : "maxime.prevot1804kz@gmail.com",
        "content" : "Salut"
    },
    {
        "username" : "Maxime",
        "city" : "Paris",
        "email" : "maxime.prevot1804kz@gmail.com",
        "content" : "Salut"
    },
    {
        "username" : "Maxime",
        "city" : "Paris",
        "email" : "maxime.prevot1804kz@gmail.com",
        "content" : "Salut"
    },
    {
        "username" : "Maxime",
        "city" : "Paris",
        "email" : "maxime.prevot1804kz@gmail.com",
        "content" : "Salut"
    },
    {
        "username" : "Maxime",
        "city" : "Paris",
        "email" : "maxime.prevot1804kz@gmail.com",
        "content" : "Salut"
    }];
})
component.controller('usersCtrl',function($scope){
    $scope.users= [
    {username:'John',content:'Saluttt'},
    {username:'Jean',content:'Jean ai rien a faire'},
    {username:'Paul',content:'Paulitooo'}
]
})


component.controller('formvalidcomp', function($scope){
    $scope.submitForm = function(isValid){
        if(isValid){
            alert("Data saved");
        }
    }
});




