import React from 'react'
import { SearchIcon } from './SearchIcon'

export const SearchContainer = ({ darkTheme, onSearchInput, onRegionInput }) => (
  <div className='search-container'>
    <div className='search-bar'>

      <SearchIcon
        darkTheme={darkTheme}
      />
      <input type='text' id='search-input' className='search-input' onInput={onSearchInput} />
    </div>

    <select className='filter' placeholder='Filter By Region' onInput={onRegionInput}>
      <option value=''>Filter By Region</option>
      <option value='Africa'>Africa</option>
      <option value='Americas'>Americas</option>
      <option value='Asia'>Asia</option>
      <option value='Europe'>Europe</option>
      <option value='Oceania'>Oceania</option>
    </select>
  </div>

)