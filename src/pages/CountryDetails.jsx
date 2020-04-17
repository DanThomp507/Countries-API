import React from 'react';
import { Link } from 'react-router-dom'
import { TopBar } from '../components/TopBar'
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
          <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512" className="icon">
            <polyline points="244 400 100 256 244 112" />
            <line x1="120" y1="256" x2="412" y2="256" />
          </svg>
                    Back
                </Link>

        <div className="data-container">
          <img src={selectedCountry.flag} style={{ width: '100%', maxWidth: '36vw', alignSelf: 'center', justifySelf: 'center' }} alt="selectedCountry flag" />
          <div className="text-container">
            <div className="selectedCountry-name">{selectedCountry.name}</div>
            <div className="first-container">
              <div>
                <span className="content-title">Native Name: </span>
                <span className="selectedCountry-content">{selectedCountry.nativeName}</span>
              </div>
              <div>
                <span className="content-title">Population: </span>
                <span className="selectedCountry-content">{selectedCountry.population.toLocaleString()}</span>
              </div>
              <div>
                <span className="content-title">Region: </span>
                <span className="selectedCountry-content">{selectedCountry.region}</span>
              </div>
              <div>
                <span className="content-title">Sub Region: </span>
                <span className="selectedCountry-content">{selectedCountry.subregion}</span>
              </div>
              <div>
                <span className="content-title">Capital: </span>
                <span className="selectedCountry-content">{selectedCountry.capital}</span>
              </div>
            </div>
            <div className="second-container">
              <div>
                <span className="content-title">Top Level Domain: </span>
                {
                  selectedCountry.topLevelDomain.map(domainName => {
                    return <span className="selectedCountry-content" key={domainName}>{domainName}</span>
                  })
                }
              </div>
              <div>
                <span className="content-title">Currencies: </span>
                {
                  selectedCountry.currencies.map(currency => currency.name).join(', ')
                }
              </div>
              <div>
                <span className="content-title">Languages: </span>
                {
                  selectedCountry.languages.map(language => language.name).join(', ')
                }
              </div>
            </div>

            {selectedCountry.borders.length > 0 &&
              <div className="border-countries-container">
              <div className="sub-title">
                Border Countries:
             </div>
              {selectedCountry.borders.map(borderselectedCountryCode => {
                  let borderselectedCountry = countries.find((value) => value.alpha3Code === borderselectedCountryCode)

                  return (
                    <div key={borderselectedCountryCode} className="border-selectedCountry">
                      <span>{borderselectedCountry.name}</span>
                    </div>
                  )
                })
              }
            </div>
            }

          </div>
        </div>
      </div>
    )
  }
}