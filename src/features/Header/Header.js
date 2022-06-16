import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchTerm } from '../../store/redditSlice';
import './Header.css';

const Header = () => {
const dispatch = useDispatch();
const [ search, setSearch ] = useState('');

const onSearchTermChange = (e) => {
  setSearch(e.target.value);
}

// useEffect(() => {
//   setSearchTerm(searchTerm)
// }, [searchTerm])

const onSearchTermSubmit = (e) => {
  e.preventDefault();
  //dispatch here
  dispatch(setSearchTerm(search))
  console.log(setSearchTerm(search));
}

// If you want to search for “cake recipes”:

// Original URL: https://www.reddit.com/search?q=cake%20recipes
// JSON URL: https://www.reddit.com/search.json?q=cake%20recipes

  return (
    <div className='header'>
      <h1>Reddit Friend</h1>
      <form className="search" onSubmit={onSearchTermSubmit}>
          <input 
            type="text" 
            placeholder="Search" 
            value={search} 
            onChange={onSearchTermChange}
            aria-label="Search posts"
          />
        <button type="submit" onClick={onSearchTermSubmit} aria-label="Search">Submit</button>
      </form>
    </div>

  )
}

export default Header;


