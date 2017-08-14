import React, { Component } from 'react';
import { getBooksFromFakeXHR } from '../../lib/books.db.js';
import AppTitle from '../../components/BookListAppTitle.js';
import BookList from '../BookList';
import NewBookForm from '../NewBookForm/index.js';
import SearchField from '../../components/BookFilterInput.js';

class App extends Component {
  constructor() {
    super();

    this.state = {
      books: [],
      searchFilter: ''
    };

    this.setSearchFilter = this.setSearchFilter.bind(this);
  }

  setSearchFilter( event ){
    const searchFilter = event.target.value;
    this.setState({ searchFilter });
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
      <AppTitle title="Book List" />
      <SearchField setSearchFilter={ this.setSearchFilter }/>
      <BookList books={ this.state.books } searchFilter={ this.state.searchFilter } />
      <NewBookForm />
      </div>
      );
  }
}

export default App;
