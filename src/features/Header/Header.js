import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchTerm, getSearchResults } from '../../store/redditSlice';
import './Header.css';

export const Header = () => {
  const dispatch = useDispatch();
  // const searchTerm = useSelector(state => state.searchTerm)
  const [ searchTermLocal, setSearchTermLocal ] = useState('');

  const onSearchTermChange = (e) => {
    setSearchTermLocal(e.target.value);
   
  }

  const onSearchTermSubmit = (e) => {
    e.preventDefault();
      dispatch(getSearchResults(searchTermLocal))
      setSearchTermLocal('');
  }

  return (
    <div className='header'>
      <h1>Reddit Friend</h1>
      <form className="search" onSubmit={onSearchTermSubmit}>
          <input 
            type="text" 
            placeholder="Enter Search term" 
            value={searchTermLocal} 
            onChange={onSearchTermChange}
            aria-label="Search posts"
          />
        <button type="submit" onClick={onSearchTermSubmit} aria-label="Search">Submit</button>
      </form>
    </div>

  )
}


