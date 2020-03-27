import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home } from './pages/Home'
import { CountryDetails } from './pages/CountryDetails'

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/details" component={CountryDetails}></Route>
    </Router>
  )
}

export default App;
