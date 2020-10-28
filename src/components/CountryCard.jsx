import React from 'react'
import './../css/variables.css';

export const CountryCard = ({ data }, darkTheme) => {
  const country = data;
  return (
    <div className='country-card-container' darktheme={darkTheme}>
      <img src={country.flag} style={{ width: '300px', height: '200px' }} alt='country flag' />
      <div className='content'>
        <div className='name'>{country.name}</div>
        <div>
          <span className='content-type'>Population: </span>
          <span className='population'>{country.population.toLocaleString()}</span>
        </div>
        <div>
          <span className='content-type'>Region: </span>
          <span className='region'>{country.region}</span>
        </div>
        <div>
          <span className='content-type'>Capital: </span>
          <span className='capital'>{country.capital}</span>
        </div>
      </div>
    </div>
  )
}