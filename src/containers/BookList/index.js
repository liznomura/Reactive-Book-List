import React from 'react';
import Book from '../../components/Book.js';

const BookList = ({ books }) => {
  return (
    <ul>
      {books.map((book, i) => <Book title={book.title} author={book.author} key={i}/>)}
    </ul>
  );
};

export default BookList;
