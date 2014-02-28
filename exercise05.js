var Book = function(title, genre, author, read, readDate){
    // creates a book object
    this.title = title || "Unknown Title";
    this.genre = genre || "Unknown Genre";
    this.author = author || "Unknown Author";
    this.read = read || false;
    this.readDate = readDate || undefined;
};

var BookList = function(booksRead, booksNotRead, bookShelf){
    // initializes (by default) an empty booklist
    this.booksRead = booksRead || 0;
    this.bookShelf = []; // not sure yet
    this.booksNotRead = this.bookShelf.length - this.booksRead;

    this.unreadBooks = function(){
        // returns unread books that aren't the current book
        var unreadBooks = [];
        if (this.currentBook) {
            for (i=0; i < this.bookShelf.length; i++) {
                if (this.bookShelf[i].read === false && this.bookShelf[i] != this.currentBook) {
                    unreadBooks.push(this.bookShelf[i]);
                }
            }
        }
        return unreadBooks;
    };

    this.nextBook = function(){
        // picks a random unread book to be the next book you read
        var listOfUnread = this.unreadBooks();
        var randomBookNo = Math.floor(Math.random() * listOfUnread.length);
        return listOfUnread[randomBookNo];
    };


    // this.setCurrentBook = function(book){
    //     // manually set current book

    // }


    this.currentBook = this.nextBook();

    // can't set these attributes without functions above
    if (this.currentBook) {
        this.booksReading = 1;
    }
    this.nextBook = this.nextBook();

    this.readBooks = function(){
        // returns array of read books
        var readBooks = [];
        for (i=0; i<this.bookShelf.length; i++) {
            if (this.bookShelf[i].read) {
                readBooks.push(this.bookShelf[i]);
            }
        }
        return readBooks;
    };

    this.lastBook = function(){
        // returns the most recently read book
        listOfRead = this.readBooks();
        listOfRead.sort(function(a, b) {
            if (a.readDate > b.readDate)
                return 1;
            if (a.readDate < b.readDate)
                return -1;
            return 0;
        });
        return listOfRead[listOfRead.length-1];
    };
    this.add = function(title, genre, author){
        // adds a new book object to a booklist, defaults to unread
        this.bookShelf.push(new Book(title, genre, author));
        this.recalculate();
        return this.bookShelf;
    };
    this.addBook = function(book){
        // adds an existing book object to a booklist
        this.bookShelf.push(book);
        if (book.read === false){
            this.booksNotRead++;
        }
        else {
            this.booksRead++;
        }
        this.recalculate();
    };
    this.finishCurrentBook = function(){
        // sets current book to read with current date info
        this.currentBook.readDate = new Date();
        this.currentBook.read = true;
        this.recalculate();

    };
    this.recalculate = function(){
        // recalculates booksRead and booksNotRead, for use in methods that modify bookShelf
        this.booksRead = this.readBooks().length;
        this.booksNotRead = this.unreadBooks().length;
    };
};