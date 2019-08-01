import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import NavBar from './components/NavBar'
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
          <Route path='/Portfolio' component={() => <Portfolio />} />
          <Route path='/About-Me' component={() => <AboutMe />} />
          <Redirect to='/' component={() => <Home />} />
        </Switch>
      </>
    )
  }
}

export default App;
