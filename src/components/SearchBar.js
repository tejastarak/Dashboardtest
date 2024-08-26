import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const categories = useSelector(state => state.dashboard.categories);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredWidgets = categories
    .flatMap(category => category.widgets)
    .filter(widget => widget.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div>
      <input
        type="text"
        placeholder="Search Widgets"
        value={searchTerm}
        onChange={handleSearch}
      />
      <div>
        {filteredWidgets.map(widget => (
          <div key={widget.id}>
            <h3>{widget.name}</h3>
            <p>{widget.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
