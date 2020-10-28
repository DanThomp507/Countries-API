import React from 'react';
import { Link } from 'react-router-dom'
import { TopBar } from '../components/TopBar'
import { CountryData } from '../components/CountryData'
import { BackButton } from '../components/BackButton'
import './../css/variables.css';
import './../css/details.css';

export const CountryDetails = (props) => {
  const [darkTheme, setDarkTheme] = React.useState(props.location?.state?.darkTheme || false);
  const [selectedCountry, setSelectedCountry] = React.useState(props?.location?.state?.selectedCountry || null);
  const [countries, setCountries] = React.useState(props?.location?.state?.countries || null);

  React.useEffect(() => {
    if (props) {
      setDarkTheme(props?.location?.state?.darkTheme);
      setSelectedCountry(props?.location?.state?.selectedCountry);
      setCountries(props?.location?.state?.countries);
    }
  }, [props]);

  return (
    <div className="container" darktheme={darkTheme.toString()}>
      <TopBar
        darkTheme={darkTheme}
        onInput={() => setDarkTheme(!darkTheme)} />

      <Link to={{
        pathname: '/',
        state: {
          darkTheme: darkTheme
        }
      }}
        className="go-back">
        <BackButton />
        Back
        </Link>

      <CountryData
        countries={countries}
        selectedCountry={selectedCountry}
      />
    </div>
  )
};