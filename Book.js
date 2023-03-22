const { v4: uuid } = require('uuid');

class Book {
  constructor(obj) {
    const {
      title = '',
      description = '',
      authors = '',
      favorite = '',
      fileCover = '',
      fileName = '',
    } = obj;

    this.id = uuid();
    this.title = title;
    this.description = description;
    this.authors = authors;
    this.favorite = favorite;
    this.fileCover = fileCover;
    this.fileName = fileName;
  }
}

module.exports = Book;
