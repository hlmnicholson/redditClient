import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchSearchResults } from '../../store/redditSlice';
import './Header.css';

export const Header = () => {
  const dispatch = useDispatch();
  const [ searchTermLocal, setSearchTermLocal ] = useState('');

  const onSearchTermChange = (e) => {
    setSearchTermLocal(e.target.value);
  }

  const onSearchTermSubmit = (e) => {
    e.preventDefault();
    if(searchTermLocal !== '') {
      dispatch(fetchSearchResults(searchTermLocal))
      setSearchTermLocal('');
    }
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


