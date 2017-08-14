import React, { Component } from 'react';
import AppTitle from '../../components/BookListAppTitle.js';
import FilterInput from '../../components/BookFilterInput.js';
import BookList from '../BookList';
import NewBookForm from '../NewBookForm';
import { getBooksFromFakeXHR, addBookToFakeXHR } from '../../lib/books.db.js';

class App extends Component {
  constructor() {
    super();

    this.state = {
      books: [],
      searchFilter: ''
    };

    this.addBook = this.addBook.bind(this);
    this.setFilter = this.setFilter.bind(this);
  }

  setFilter(event) {
    const searchFilter = event.target.value;
    console.log(event.target.value);
    this.setState({ searchFilter });
  }

  addBook(book) {
    addBookToFakeXHR(book).then(books => {
      this.setState({
        books: books
      });
    });
  }

  componentDidMount() {
    getBooksFromFakeXHR().then(books => {
      this.setState({
        books: books
      });
    });
  }

  render() {
    return (
      <div>
        <AppTitle title="Book List Redo" />
        <FilterInput setFilter={this.setFilter} />
        <BookList
          books={this.state.books}
          searchFilter={this.state.searchFilter}
        />
        <NewBookForm addBook={this.addBook} />
      </div>
    );
  }
}

export default App;
