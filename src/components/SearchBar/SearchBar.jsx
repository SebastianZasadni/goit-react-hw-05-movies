import React, { useState } from 'react';
import PropTypes from 'prop-types'; 
import css from './SearchBar.module.css'

export const SearchBar = ({ handleSubmit }) => {
  const [query, setQuery] = useState('');

  const inputHandle = event => {
    setQuery(event.target.value);
  };
  const onSubmit = event => {
    event.preventDefault();
    handleSubmit(query);
    setQuery('');
  };

  return (
    <form onSubmit={onSubmit} className={css.form}>
      <input type="text" onChange={inputHandle} value={query} className={css.input}/>
      <button type="submit">Search</button>
    </form>
  );
};

SearchBar.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
}