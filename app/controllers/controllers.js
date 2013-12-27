app.controller('BooksController', function ($scope, $routeParams, booksService) {

    init();

    function init() {
        var bookID = ($routeParams.bookID) ? parseInt($routeParams.bookID) : 0;   
        if (bookID > 0) {
            $scope.book = booksService.getBook(bookID);
            $scope.newBook = booksService.getBook(bookID);
        }else{
            $scope.books = booksService.getBooks();
        }
    }

    $scope.saveBook = function () {
        var id = $scope.newBook.id,
            title = $scope.newBook.title,
            author = $scope.newBook.author,
            page = $scope.newBook.page,
            status = $scope.newBook.status,
            startdate = $scope.newBook.startdate,
            enddate = $scope.newBook.enddate;
        booksService.saveBook(id, title, author, page, status, startdate, enddate, function(bookEmpty){
            $scope.newBook = bookEmpty;
        });
    };

    $scope.deleteBook = function (id) {
        booksService.deleteBook(id);
    };

    $scope.buildPlan = function (id) {
        
    };
});