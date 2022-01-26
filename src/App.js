import React from 'react';
import './App.css';
import Table from './components/Table';
import Search from './components/Search';
import Provider from './components/Provider';

function App() {
  return (
    <Provider>
      <Search />
      <Table />
    </Provider>
  );
}

export default App;
