import React from 'react'
import ReactDOM  from 'react-dom'

import Router from 'react-router'
import { IndexRoute, Route } from 'react-router'
import createBrowserHistory from 'history/lib/createBrowserHistory'

// Components
import Template from './components/Template'
import Home from './components/Home'
import Login from './components/Login'
import About from './components/About'
import NotFound from './components/NotFound'

const Routes = (
  <Router history={ createBrowserHistory() }>
    <Route path="/" component={Template}>
      <IndexRoute component={Home} />
      <Route path="login" component={Login} />
      <Route path="about" component={About} />
      <Route path="*" component={NotFound}/>
    </Route>
  </Router>
);

ReactDOM.render(Routes, document.getElementById("app"));