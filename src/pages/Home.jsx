import React from 'react'
import { Link } from 'react-router-dom';

export class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      countries: [],
      darkMode: props.location.state ? props.location.state.darkTheme : false,
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
    console.log(this.state.countries)
  }

  themeToggle = () => {
    this.setState({ darkTheme: !this.state.darkTheme })
  }

  render() {
    return (
      <div>
        Home
      </div>
    )
  }
}