import React, { useState } from 'react';

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
    <form onSubmit={onSubmit}>
      <input type="text" onChange={inputHandle} />
      <button type="submit">Search</button>
    </form>
  );
};
