import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import Loading from './Loading';

const BooksList = () => {
  const books = useSelector((state) => state.entities.books.list);
  const loadingState = useSelector((state) => state.entities.books.loading);
  const selectedCategory = useSelector((state) => state.entities.filter);

  const selectedCat = (category) => {
    if (category === 'All') {
      <Book books={books} />;
      console.log(books);
    }
    // const getBooks = Object.entries(books).map((item) => (item[1]));
    // const filterbooks = getBooks.filter((book) => book.tags === category);
    // return filterbooks.map((books) => <Book books={books} />);
  };

  return (
    < >
      { loadingState ? <Loading /> : selectedCat(selectedCategory)}
      {/* { loadingState ? <Loading /> : <Book books={books} />} */}
    </>
  );
};

export default BooksList;
