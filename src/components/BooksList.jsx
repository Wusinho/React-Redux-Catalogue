import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import Book from './Book';
import Loading from './Loading';
import { loadBooks } from '../store/books';

const BooksList = () => {
  const books = useSelector((state) => state.entities.books.list.results);
  // const loadingState = useSelector((state) => state.entities.books.loading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadBooks());
  }, []);

  return (
    books ? books.map((book) => (
      <div className="card my-3" key={book.id}>
        <div className="card-body">
          <h5 className="card-title">{book.name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{book.gender}</h6>
          <p className="card-text">{book.species}</p>
        </div>
      </div>
    )) : <Loading />
  );
};

export default BooksList;
