import React, { useContext } from 'react';
import context from '../context/context';

function Search() {
  const { setFilterByName } = useContext(context);
  return (
    <input
      type="search"
      onChange={ ({ target }) => setFilterByName({ name: target.value }) }
      data-testid="name-filter"
    />
  );
}

export default Search;
