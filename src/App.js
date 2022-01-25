import React, { useEffect, useState } from 'react';
import './App.css';
import api from './services/api';
import Table from './components/Table';
import Search from './components/Search';
import context from './context/context';

function App() {
  const [apiResponse, setApiResponse] = useState([]);
  // componentDidMount
  useEffect(() => {
    (async () => {
      const { results } = await api();
      setApiResponse(results);
    })();
  }, []);

  // Esse requisito foi feito com a ajuda do link a seguir:
  // https://stackoverflow.com/questions/53332321/react-hook-warnings-for-async-function-in-useeffect-useeffect-function-must-ret

  const contextValue = {
    data: apiResponse,
  };

  return (
    <context.Provider value={ contextValue }>
      <Search />
      <Table />
    </context.Provider>
  );
}

export default App;
