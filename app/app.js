/*#######################################################################  
  Normally like to break AngularJS apps into the following folder structure
  at a minimum:

  /app
      /controllers      
      /directives
      /services
      /partials
      /views
  #######################################################################*/

var app = angular.module('readingPlanApp', []);

//This configures the routes and associates each route with a view and a controller
app.config(function ($routeProvider) {
    $routeProvider
        .when('/books',
            {
                controller: 'BooksController',
                templateUrl: '/app/partials/books.html'
            })
        //Define a route that has a route parameter in it (:bookID)
        .when('/view/:bookID',
            {
                controller: 'BooksController',
                templateUrl: '/app/partials/book-review.html'
            })
        //Define a route that has a route parameter in it (:customerID)
        .when('/add',
            {
                controller: 'BooksController',
                templateUrl: '/app/partials/book-add.html'
            })
        //Define a route that has a route parameter in it (:customerID)
        .when('/edit/:bookID',
            {
                controller: 'BooksController',
                templateUrl: '/app/partials/book-add.html'
            })
        .otherwise({ redirectTo: '/books' });
});




