import React from 'react';
import { Link } from 'react-router-dom';
import './../css/index.css';
import './../css/variables.css';
import { TopBar } from '../components/TopBar';
import { CountryCard } from '../components/CountryCard';
import { SearchContainer } from '../components/SearchContainer';

export const Home = (props) => {
  const [darkTheme, setDarkTheme] = React.useState(props.location.state ? props.location.state.darkTheme : false);
  let [countries, setCountries] = React.useState([]);
  const [region, setRegion] = React.useState('');
  const [searchItem, setSearchItem] = React.useState('');


  React.useEffect(() => {
    async function fetchData() {
      let response = await fetch('https://restcountries.eu/rest/v2/all');
      let json = await response.json();
      setCountries(json)
    }
    fetchData();

    if (props) {
      setDarkTheme(props?.location?.state?.darkTheme);
    }
  }, [props]);

  countries = countries.filter((country) => (
    country.name.toLocaleUpperCase().includes(searchItem.toLocaleUpperCase()) && (region === '' || country.region === region)
  ))

  return (
    <div className='container' darktheme={darkTheme.toString()}>

      <TopBar
        darkTheme={darkTheme}
        onInput={() => setDarkTheme(!darkTheme)} />

      <SearchContainer
        darkTheme={darkTheme}
        onSearchInput={event => {
          event.persist();
          setSearchItem(event.target.value);
        }}
        onRegionInput={event => {
          event.persist();
          setRegion(event.target.value);
        }}
      />


      <div className='countries'>
        {countries.map(country => {
          return (
            <Link to={{
              pathname: '/details',
              state: {
                countries: countries,
                selectedCountry: country,
                darkTheme: darkTheme
              }
            }}
              style={{ textDecoration: 'none' }} key={country.name}>
              <CountryCard data={country} darkTheme={darkTheme.toString()} />
            </Link>
          )
        })}
      </div>
    </div>
  )
};