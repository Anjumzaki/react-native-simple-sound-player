import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Home from './Home.js'
import About from './About.js'

const Routes = () => (
   <Router>
      <Scene key = "root">
         <Scene key = "home" component = {Home} hideNavBar={true} title = "Home" />
         <Scene key = "about" component = {About} hideNavBar={true} title = "About" initial = {true}/>
      </Scene>
   </Router>
)
export default Routes