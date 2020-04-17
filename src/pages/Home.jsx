import React from 'react';
import { Link } from 'react-router-dom';
import './../css/index.css';
import './../css/variables.css';
import { TopBar } from '../components/TopBar';
import { CountryCard } from '../components/CountryCard';
import { SearchContainer } from '../components/SearchContainer';

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

        <SearchContainer
          darkTheme={this.state.darkTheme}
          onSearchInput={event => {
            event.persist();
            this.setState({
              searchItem: event.target.value
            })
          }}
          onRegionInput={event => {
            event.persist();
            this.setState({
              region: event.target.value
            })
          }}
        />


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