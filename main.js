"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Book {
    title;
    author;
    static NumOfBooks = 0;
    constructor(title, author) {
        this.title = title;
        this.author = author;
        Book.NumOfBooks++;
    }
    bookDetails() {
        console.log(this);
        console.log(`Title: ${this.title}, Author: ${this.author}`);
    }
    getNumOfBooks() {
        return Book.NumOfBooks;
    }
}
class EBook extends Book {
    fileSize;
    constructor(title, author, fileSize) {
        super(title, author);
        this.fileSize = fileSize;
    }
    BookDetails() {
        console.log(`Title: ${this.title}, Author: ${this.author}, File Size: ${this.fileSize}`);
    }
}
let book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald");
console.log(book1.bookDetails());
let book2 = new Book("To Kill a Mockingbird", "Harper Lee");
console.log(book2.bookDetails());
let Ebook1 = new EBook("The Catcher in the Rye", "J.D. Salinger", 1.2);
console.log(Ebook1.BookDetails());
console.log(Ebook1.getNumOfBooks());
let Ebook2 = new EBook("The Hobbit", "J.R.R. Tolkien", 2.5);
console.log(Ebook2.BookDetails());
console.log(Ebook2.getNumOfBooks());
