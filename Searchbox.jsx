import React from 'react';


import './searchbox.css';

export const Searchbox= ({ handlePokeSearch}) => <input
      className="search"
      type="search"
      placeholder="Search"
      onChange={e => {
          
          handlePokeSearch(e.target.value);
      }}

/>    
    