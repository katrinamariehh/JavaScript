var Book = function(title, genre, author, read, readDate){
    this.title = title || "Unknown Title";
    this.genre = genre || "Unknown Genre";
    this.author = author || "Unknown Author";
    this.read = read || false;
    this.readDate = readDate || undefined;
};

var BookList = function(booksRead, booksNotRead, bookShelf){
    this.booksRead = booksRead || 0;
    this.bookShelf = []; // not sure yet
    this.booksNotRead = this.bookShelf.length - this.booksRead;
    this.currentBook = function(){
        for (i=0; i < this.bookShelf.length; i ++ ) {
            if (this.bookShelf[i].read === false) {
                return this.bookShelf[i];
            }
        }
    };
    this.unreadBooks = function(){
        var unreadBooks = [];
        for (i=0; i < this.bookShelf.length; i++) {
            if (this.bookShelf[i].read === false) {
                unreadBooks.push(this.bookShelf[i]);
            }
        }
        return unreadBooks;
    };
    this.readBooks = function(){
        var readBooks = [];
        for (i=0; i<this.bookShelf.length; i++) {
            if (this.bookShelf[i].read) {
                readBooks.push(this.bookShelf[i]);
            }
        }
        return readBooks;
    };
    this.nextBook = function(){
        var listOfUnread = this.unreadBooks();
        var randomBookNo = Math.floor(Math.random() * listOfUnread.length);
        return listOfUnread[randomBookNo];
    };
    this.lastBook = function(){
        listOfRead = this.readBooks();
        listOfRead.sort(function(a, b) {
            if (a.readDate > b.readDate)
                return 1;
            if (a.readDate < b.readDate)
                return -1;
            return 0;
        });
        return listOfRead.slice(-1);
    };
    this.add = function(title, genre, author){
        this.bookShelf.push(new Book(title, genre, author));
        this.recalculate();
        return this.bookShelf;
    };
    this.addBook = function(book){
        this.bookShelf.push(book);
        if (book.read === false){
            this.booksNotRead ++;
        }
        else {
            this.booksRead ++;
        }
        this.recalculate();
    };
    this.finishCurrentBook = function(){
        this.currentBook().readDate = new Date();
        this.currentBook().read = true;
        this.recalculate();
    };
    this.recalculate = function(){
        this.booksRead = this.readBooks().length;
        this.booksNotRead = this.unreadBooks().length;
    };
};