import React from 'react';

export const CountryData = ({ selectedCountry, countries } ) => (

    <div className="data-container">
    <img src={selectedCountry.flag} style={{ width: '100%', maxWidth: '36vw', alignSelf: 'center', justifySelf: 'center' }} alt="selectedCountry flag" />
    <div className="text-container">
      <div className="country-name">{selectedCountry.name}</div>
      <div className="first-container">
        <div>
          <span className="content-title">Native Name: </span>
          <span className="country-content">{selectedCountry.nativeName}</span>
        </div>
        <div>
          <span className="content-title">Population: </span>
          <span className="country-content">{selectedCountry.population.toLocaleString()}</span>
        </div>
        <div>
          <span className="content-title">Region: </span>
          <span className="country-content">{selectedCountry.region}</span>
        </div>
        <div>
          <span className="content-title">Sub Region: </span>
          <span className="country-content">{selectedCountry.subregion}</span>
        </div>
        <div>
          <span className="content-title">Capital: </span>
          <span className="country-content">{selectedCountry.capital}</span>
        </div>
      </div>
      <div className="second-container">
        <div>
          <span className="content-title">Top Level Domain: </span>
          {
            selectedCountry.topLevelDomain.map(domainName => {
              return <span className="country-content" key={domainName}>{domainName}</span>
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
)