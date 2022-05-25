import React from "react";
// { useState, useEffect } from "react";
import './Header.css';

const Header = () => {
// const [ searchTerm, setSearchTerm ] = useState('');

  return (
    <div>
      <h1>Reddit Friend</h1>
      <form id="search">
        <label>
          Search:
          <input typ="text" name="name" />
        </label>
        <button type="submit">Submit</button>
      </form>

    </div>

  )
}

export default Header;

