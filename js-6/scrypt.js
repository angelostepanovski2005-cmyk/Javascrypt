class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
    this.isAvailable = true; 
  }

  borrowBook() {
    if (this.isAvailable) {
      this.isAvailable = false;
      console.log(`Книгата "${this.title}" е успешно изнајмена.`);
    } else {
      console.log(`Книгата "${this.title}" е веќе изнајмена.`);
    }
  }

  returnBook() {
    this.isAvailable = true;
    console.log(`Книгата "${this.title}" е вратена во библиотеката.`);
  }
}

class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
    console.log(
      `Книгата "${book.title}" е додадена во библиотеката ${this.name}.`,
    );
  }

  showAvailableBooks() {
    console.log(`--- Достапни книги во "${this.name}": ---`);
    const availableBooks = this.books.filter((book) => book.isAvailable);

    if (availableBooks.length === 0) {
      console.log("Нема достапни книги во моментов.");
    } else {
      availableBooks.forEach((book) =>
        console.log(`- "${book.title}" од ${book.author}`),
      );
    }
  }

  borrowBook(title) {
    const book = this.books.find((b) => b.title === title);
    if (book) {
      book.borrowBook();
    } else {
      console.log(`Книгата "${title}" не е пронајдена во библиотеката.`);
    }
  }
}


const myLibrary = new Library("Градска Библиотека");

const book1 = new Book("Дигитална Тврдина", "Ден Браун");
const book2 = new Book("Малиот Принц", "Антоан де Сент Егзипери");

myLibrary.addBook(book1);
myLibrary.addBook(book2);

myLibrary.showAvailableBooks();

myLibrary.borrowBook("Малиот Принц");
myLibrary.showAvailableBooks();

myLibrary.borrowBook("Малиот Принц"); 
