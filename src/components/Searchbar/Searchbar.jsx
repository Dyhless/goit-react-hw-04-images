import { useState } from 'react';
import PropTypes from 'prop-types';

import { Input, SearchButton, SearchForm } from './Searchbar.styled';

const Searchbar = ({ onSubmit }) => {
  const [searchText, setSearchText] = useState('');

  const handleChange = event => {
    setSearchText(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const trimmedSearchText = searchText.trim();
    if (trimmedSearchText) {
      onSubmit(trimmedSearchText);
      setSearchText('');
    }
  };

  return (
    <header className="searchbar">
      <SearchForm onSubmit={handleSubmit}>
        <SearchButton type="submit">
          <span>Search</span>
        </SearchButton>

        <Input
          name="searchText"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search for graphic images"
          value={searchText}
          onChange={handleChange}
        />
      </SearchForm>
    </header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
