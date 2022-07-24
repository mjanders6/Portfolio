import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'

class App extends Component {
  render() {
    return (
      <>
        <NavBar />

        <Switch>
          <Route exact path='/portfolio' component={() => <Home />} />
          <Route path='/Projects' component={() => <Portfolio />} />
          <Redirect to='/portfolio' component={() => <Home />} />
        </Switch>

        <Footer />
      </>
    )
  }
}

export default App;
