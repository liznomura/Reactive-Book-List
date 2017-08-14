import React, { Component } from 'react';
import AppTitle from '../../components/BookListAppTitle.js';
import BookList from '../BookList';
import NewBookForm from '../NewBookForm';
import {getBooksFromFakeXHR, addBookToFakeXHR} from '../../lib/books.db.js';


class App extends Component {
  constructor() {
    super();

    this.state = {
      books: []
    }

    this.addBook = this.addBook.bind(this);
  }

  addBook(book) {
    addBookToFakeXHR(book)
    .then(books => {
      this.setState({
        books: books
      })
    })
  }

  componentDidMount() {
    getBooksFromFakeXHR()
    .then( books => {
      this.setState({
        books: books
      })
    })
  }

  render() {
    return (
      <div>
      <AppTitle title="Book List Redo" />
      <BookList books={ this.state.books } />
      <NewBookForm addBook={ this.addBook } />
      </div>
      )
  }
}

export default App;