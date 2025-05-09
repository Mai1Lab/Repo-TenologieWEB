var app = angular.module('myApp', []); // Crea un modulo AngularJS chiamato "myApp"
app.controller('myCtrl', function($scope) { // Definisce un controller chiamato "myController"
    $scope.greeting = "Ciao ecco la direttiva ng-model"; // Inizializza una variabile di scope chiamata "message"

    // Nella pagina html li dove troviamo il tag <input> con l'attributo ng-model="name"
    // AngularJS crea automaticamente una variabile di scope chiamata "name" e la associa al valore dell'input.
    // Quindi, quando l'utente digita qualcosa nell'input, il valore della variabile "name" viene aggiornato automaticamente.
});
