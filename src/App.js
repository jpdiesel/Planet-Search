import React from 'react';
import './App.css';
import Table from './components/Table';
import Search from './components/Search';
import Provider from './components/Provider';
import Comparisons from './components/Comparisons';

function App() {
  return (
    <Provider>
      <Search />
      <Comparisons />
      <Table />
    </Provider>
  );
}

export default App;
