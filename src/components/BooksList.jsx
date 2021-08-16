import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import Loading from './Loading';
import { booksFilter } from '../store/filter';
import categories from './categories';

const BooksList = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.entities.books.list);
  const loadingState = useSelector((state) => state.entities.books.loading);
  const selectedCategory = useSelector((state) => state.entities.filter);

  const handleFilterCHange = (e) => {
    dispatch(booksFilter(e.target.value));
  };

  const selectedCat = (category) => {
    if (category === 'All') {
      <Book books={books} />;
    }
    const filterbooks = books.filter((book) => book.category === category);
    return filterbooks.map((books) => (
      // eslint-disable-next-line react/jsx-key
      <Book books={books} />
    ));
  };

  const filterCategories = (
    <div>
      <form>
        <select
          className="form-control"
          onChange={(e) => handleFilterCHange(e)}
        >
          <option defaultValue disabled>Choose a Category</option>
          <option key="0"> All </option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.cat}>
              {cat.cat}
            </option>
          ))}
        </select>
      </form>
    </div>
  );
  return (
    <div className="displayBooks">
      {filterCategories}
      { loadingState ? <Loading /> : selectedCat(selectedCategory)}
    </div>
  );
};

export default BooksList;
