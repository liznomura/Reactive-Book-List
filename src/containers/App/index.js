import React, { Component } from 'react';
import AppTitle from '../../components/BookListAppTitle.js';
import BookList from '../BookList';
import {getBooksFromFakeXHR} from '../../lib/books.db.js';


class App extends Component {
  constructor() {
    super();

    this.state = {
      books: []
    }
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
      </div>
      )
  }
}

export default App;