import React from 'react';
import { Link } from 'react-router-dom'
import { TopBar } from '../components/TopBar'
import { CountryData } from '../components/CountryData'
import { BackButton } from '../components/BackButton'
import './../css/variables.css';
import './../css/details.css';

export class CountryDetails extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      darkTheme: props.location.state.darkTheme || false,
      selectedCountry: props.location.state.selectedCountry,
      countries: props.location.state.countries
    }
  }

  changeTheme = () => {
    this.setState({
      darkTheme: !this.state.darkTheme
    })
  }

  render() {
    const { selectedCountry, countries } = this.state

    return (
      <div className="container" darktheme={this.state.darkTheme.toString()}>
        <TopBar
          darkTheme={this.state.darkTheme}
          onInput={this.changeTheme} />

        <Link to={{
          pathname: '/',
          state: {
            darkTheme: this.state.darkTheme
          }
        }} className="go-back">
          <BackButton />
        Back
        </Link>

        <CountryData
          countries={countries}
          selectedCountry={selectedCountry}
        />

      </div>
    )
  }
}