import React from 'react';
import { Link } from 'react-router-dom';
import './../css/index.css';
import './../css/variables.css';
import { TopBar } from '../components/TopBar';
import { CountryCard } from '../components/CountryCard';
import { SearchIcon } from '../components/SearchIcon';

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
          onInput={() => this.themeToggle()} />

        <div className='search-container'>
          <div className='search-bar'>
           <SearchIcon 
           darkTheme={this.state.darkTheme}
            />
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