app.service('booksService', function () {
    this.getBooks = function () {
        return books;
    };

    this.addBook = function (id, title, author, page, status, startdate, enddate) {
        
        var topID = books.length + 1,
            status = parseInt(status, 10),
            date = new Date(),      
            currentDate = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();

        if(startdate === undefined){
            if(status === 1 || status === 3){
                startdate = currentDate;
            }
        }
        if(status === 3 && enddate === undefined){
            enddate = currentDate;
        }

        books.push({
            id: topID,
            title: title,
            author: author,
            page: page,
            status: status,
            startdate: startdate,
            enddate: enddate,
        });
    };

    this.editBook = function (id, title, author, page, status, startdate, enddate) {
        
        var status = parseInt(status, 10),
            date = new Date(),      
            currentDate = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();

        if(startdate === undefined){
            if(status === 1 || status === 3){
                startdate = currentDate;
            }
        }
        if(status === 3 && enddate === undefined){
            enddate = currentDate;
        }

        var bookEdited           = this.getBook(id);  
            bookEdited.title     = title;
            bookEdited.author    = author;
            bookEdited.page      = page;
            bookEdited.status    = status;
            bookEdited.startdate = startdate;
            bookEdited.enddate   = enddate;
    };

    this.saveBook = function (id, title, author, page, status, startdate, enddate, callback) {
        if(id){
            this.editBook(id, title, author, page, status, startdate, enddate);
        }else{
            this.addBook(id, title, author, page, status, startdate, enddate);

            var bookEmpty = {};
            bookEmpty.title = '';
            bookEmpty.author = '';
            bookEmpty.page = '';
            bookEmpty.status = '';
            bookEmpty.startdate = '';
            bookEmpty.enddate = '';

            callback(bookEmpty);
        }        
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
            id: 1, title: 'Performance com JS', author: 'Nicolas', page: '-', startdate: '2013-10-12', enddate: '2013-10-15', status: '1'
        },
        {
            id: 2, title: 'O Melhor do Javascript', author: 'David Crockford', page: '-', startdate: '2013-10-12', enddate: '2013-10-11', status: '3'
        },
        {
            id: 3, title: 'AngularJS', author: 'Não lembro', page: '58', startdate: '2013-10-12', enddate: '-', status: '2'
        }
    ];

});