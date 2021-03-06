
class Library {
  constructor(books = []) {
    this.books = books;
  }

  bookCount(){
    return this.books.length;
  }

  addBook(newBook){
    this.books.push(newBook);}

  addBooks(newBooks){
    newBooks.forEach(book => this.books.push(book));
  }
  // addBooks(newBooks) {
  //   this.books = [...this.books, ...newBooks];
  // }

  // printInventory_original(){
  //   this.books.forEach((book) => {
  //     console.log(`${book.title} by ${book.author}`);
  //   });
  // };

  printInventory() {
    this.books.forEach(({ author, title }) => {
      console.log(`${title} by ${author}`);
    });
  }
}

export default Library;


