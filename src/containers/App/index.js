import React, { Component } from 'react';
import {getBooksFromFakeXHR} from '../../lib/books.db.js';
import NewBookForm from '../NewBookForm/index.js';

class App extends Component {
  constructor() {
    super();

  }


  componentDidMount() {

     }

  render() {
    return (
      <div>
        <NewBookForm />
      </div>
    );
  }
}

export default App;
