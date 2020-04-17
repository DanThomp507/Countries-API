import React from 'react'
import './../css/variables.css';

export class CountryCard extends React.Component {
  formatNumber(n = 0) {
    return n.toLocaleString()
  }

  render() {
    const country = this.props.data
    return (
      <div className='country-card-container' darktheme={this.props.darkTheme}>
        <img src={country.flag} style={{ width: '100%' }} alt='country flag' />
        <div className='content'>
          <div className='name'>{country.name}</div>
          <div>
            <span className='content-type'>Population: </span>
            <span className='population'>{this.formatNumber(country.population)}</span>
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
}