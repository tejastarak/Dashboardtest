import React from 'react';
import Dashboard from './components/Dashboard/Dashboard';
import SearchBar from './components/SearchBar';

const App = () => {
  return (
    <div>
      <h1>Dynamic Dashboard</h1>
      <SearchBar />
      <Dashboard />
    </div>
  );
};

export default App;
