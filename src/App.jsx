import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import NotFound from './pages/NotFound'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import Home from './pages/Home.jsx'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/signup" component={SignUp}></Route>
        <Route exact path="/signin" component={SignIn}></Route>
        <Route path="*" component={NotFound}></Route>
      </Switch>
    </Router>
  )
}

export default App
