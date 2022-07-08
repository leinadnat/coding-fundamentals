class Library {
    constructor(name) {
        this.name = name
        this.books = []
        this.addBook = function (book) {
            this.books.push(book)
        }
        this.getBooks = function () {
            return this.books.map(({ name }) => name)
        }
        this.getBooksByCategory = function(category) {
            let matchCategory = this.books.filter(book => book.category === category)
            return matchCategory.map(({ name }) => name)
        }
    }
  }
  
  class Book {
    constructor(name,author,category) {
        this.name = name;
        this.author = author;
        this.category = category;
    }
  }
  
  const library = new Library('ABC')
  
  const bookA = new Book('Book A', 'Mr. A', 'Sci-Fi')
  const bookB = new Book('Book B', 'Mr. A', 'Sci-Fi')
  const bookC = new Book('Book C', 'Mr. B', 'Horror')
  library.addBook(bookA)
  library.addBook(bookB)
  library.addBook(bookC)
  
  const allBooks = library.getBooks()
  const horrorBooks = library.getBooksByCategory('Horror')

  

  console.log(allBooks)
  console.log(horrorBooks)