import React, { Component } from 'react'
import { Scene, Router } from 'react-native-router-flux'


// screens identified by the router
import Home from '../containers/Home'
import Login from '../containers/Login'

/* **************************
* Documentation: https://github.com/aksonov/react-native-router-flux
***************************/

class NavigationRouter extends Component {
  render () {
    return (
      <Router>
        <Scene key='login' component={Login} title='Login' hideNavBar />
        <Scene initial key='home' component={Home} title='Home' />
      </Router>
    )
  }
}

export default NavigationRouter
