import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import api from '../services/api';
import context from '../context/context';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [filterByName, setFilterByName] = useState({ name: '' });

  // componentDidMount
  useEffect(() => {
    (async () => {
      const { results } = await api();
      setData(results);
    })();
  }, []);

  // Esse requisito foi feito com a ajuda do link a seguir:
  // https://stackoverflow.com/questions/53332321/react-hook-warnings-for-async-function-in-useeffect-useeffect-function-must-ret

  const contextValue = {
    data,
    filterByName,
    setFilterByName,
  };

  return (
    <context.Provider value={ contextValue }>
      { children }
    </context.Provider>
  );
}

export default Provider;

Provider.propTypes = {
  children: PropTypes.node,
}.isRequired;
