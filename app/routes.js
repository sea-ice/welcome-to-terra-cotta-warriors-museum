import React from 'react'
import { Switch, Route } from 'react-router'

import Home from './containers/Home/Home'
import ObjectDetails from './containers/ObjectDetails/ObjectDetails'
import ObjectsPage from './containers/ObjectsPage/ObjectsPage'
import BaikePage from './containers/BaikePage/BaikePage'
import NavigationPage from './containers/NavigationPage/NavigationPage'
import GamesPage from './containers/GamesPage/GamesPage'

let routes = (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route exact path='/object/:id' component={ObjectDetails} />
    <Route exact path='/objects' component={ObjectsPage} />
    <Route exact path='/baike' component={BaikePage} />
    <Route exact path='/scene' component={NavigationPage} />
    <Route exact path='/games' component={GamesPage} />
  </Switch>
)

export default routes
