const app = angular.module('myApp', []); // Crea un modulo AngularJS chiamato "myApp"


app.controller('userController', function($scope, $http) {
    $http.get('https://jsonplaceholder.typicode.com/users').then(function(response) {
    $scope.users = response.data; // Memorizza i dati degli utenti nella variabile 'users' del controller
    });
    });




// Controller 'myCtrl' per gestire il saluto e il nome
app.controller('myCtrl', function($scope) {
    $scope.greeting = "Benvenuto su AngularJS!"; // Variabile 'greeting' mostrata nel <h1>
    $scope.michiamo = "Enzo"; // Variabile 'name' legata all'input (inizialmente vuota)
});