import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
const [ searchTerm, setSearchTerm ] = useState('');

const onSearchTermChange = (e) => {
  setSearchTerm(e.target.value);
}

useEffect(() => {
  setSearchTerm(searchTerm)
}, [searchTerm])

const onSearchTermSubmit = (e) => {
  e.preventDefault();
  //dispatch here
  console.log(searchTerm);

}

  return (
    <div>
      <h1>Reddit Friend</h1>
      <form className="search" onSubmit={onSearchTermSubmit}>
          <input 
            type="text" 
            placeholder="Search" 
            value={searchTerm} 
            onChange={onSearchTermChange}
            aria-label="Search posts"
          />
        <button type="submit" onClick={onSearchTermSubmit} aria-label="Search">Submit</button>
      </form>
    </div>

  )
}

export default Header;


