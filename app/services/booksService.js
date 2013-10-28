app.service('booksService', function () {
    this.getBooks = function () {
        return books;
    };

    this.insertBook = function (title, author, page, status) {
        var topID = books.length + 1;
        books.push({
            id: topID,
            title: title,
            author: author,
            page: page,
            status: status
        });
    };

    this.deleteBook = function (id) {
        for (var i = books.length - 1; i >= 0; i--) {
            if (books[i].id === id) {
                books.splice(i, 1);
                break;
            }
        }
    };

    this.getBook = function (id) {
        for (var i = 0; i < books.length; i++) {
            if (books[i].id === id) {
                return books[i];
            }
        }
        return null;
    };

    var books = [
        {
            id: 1, title: 'Performance com JS', author: 'Nicolas', page: '-', startdate: '10/11/2013', enddate: '12/11/2013', status: 'Lido'
        },
        {
            id: 2, title: 'O Melhor do Javascript', author: 'David Crockford', page: '-', startdate: '10/11/2013', enddate: '12/11/2013', status: 'Lido'
        },
        {
            id: 3, title: 'AngularJS', author: 'Não lembro', page: '58', startdate: '10/11/2013', enddate: '-', status: 'Lendo'
        }
    ];

});