import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../store/books';

const BookForm = () => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      addBook({
        title,
      }),
    );
    setTitle('');
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="input-group mb-3">
        <input
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          type="text"
          className="form-control"
          placeholder="Book title"
        />
        <button className="btn btn-success" type="submit" id="input5">
          Add Book
        </button>
      </div>
    </form>
  );
};

export default BookForm;
