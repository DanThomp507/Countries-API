import React from 'react';
import { Link } from 'react-router-dom';
import './../css/index.css';
import './../css/variables.css';
import { TopBar } from '../components/TopBar';
import { CountryCard } from '../components/CountryCard';

export class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      countries: [],
      darkTheme: props.location.state ? props.location.state.darkTheme : false,
      region: '',
      searchItem: ''
    }
  }

  componentDidMount() {
    this.fetchData()
  }

  async fetchData() {
    let response = await fetch('https://restcountries.eu/rest/v2/all')
    let json = await response.json()

    this.setState({
      countries: json
    })
  }

  themeToggle = () => {
    this.setState({
      darkTheme: !this.state.darkTheme
    })
  }

  render() {

    let countries = this.state.countries.filter((country) => {
      return country.name.toLocaleUpperCase().includes(this.state.searchItem.toLocaleUpperCase()) && (this.state.region === '' || country.region === this.state.region)
    })

    return (
      <div className='container' darktheme={this.state.darkTheme.toString()}>
        
        <TopBar 
          darkTheme={this.state.darkTheme}
          onInput={this.themeToggle} />

        <div className='search-container'>
          <div className='search-bar'>
            <svg xmlns='http://www.w3.org/2000/svg' width='512' height='512' viewBox='0 0 512 512' className='icon'>
              <path
                d='M456.69,421.39,362.6,327.3a173.81,173.81,0,0,0,34.84-104.58C397.44,126.38,319.06,48,222.72,48S48,126.38,48,222.72s78.38,174.72,174.72,174.72A173.81,173.81,0,0,0,327.3,362.6l94.09,94.09a25,25,0,0,0,35.3-35.3ZM97.92,222.72a124.8,124.8,0,1,1,124.8,124.8A124.95,124.95,0,0,1,97.92,222.72Z'
                style={{ stroke: this.state.darkTheme ? 'black' : 'white', fill: !this.state.darkTheme ? 'black' : 'white' }}
              />
            </svg>
            <input type='text' id='search-input' className='search-input' onInput={event => { event.persist(); this.setState({ searchItem: event.target.value }) }} />
          </div>

          <select className='filter' placeholder='Filter By Region' onInput={event => { event.persist(); this.setState({ region: event.target.value }) }}>
            <option value=''>Filter By Region</option>
            <option value='Africa'>Africa</option>
            <option value='Americas'>Americas</option>
            <option value='Asia'>Asia</option>
            <option value='Europe'>Europe</option>
            <option value='Oceania'>Oceania</option>
          </select>
        </div>
        <div className='countries'>
          {countries.map(country => {
            return (
              <Link to={{
                pathname: '/details',
                state: {
                  countries: this.state.countries,
                  selectedCountry: country,
                  darkTheme: this.state.darkTheme
                }
              }} 
              style={{ textDecoration: 'none' }} key={country.name}>
                <CountryCard data={country} darkTheme={this.state.darkTheme.toString()} />
              </Link>
            )
          })}
        </div>
      </div>
    )
  }
}