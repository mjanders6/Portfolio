import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import AboutMe from './pages/AboutMe'

class App extends Component {
  render() {
    return (
      <>
        <NavBar />

        <Switch>
          <Route exact path='/' component={() => <Home />} />
          <Route path='/Projects' component={() => <Portfolio />} />
          <Route path='/About-Me' component={() => <AboutMe />} />
          <Redirect to='/' component={() => <Home />} />
        </Switch>

        <Footer />
      </>
    )
  }
}

export default App;
