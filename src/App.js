import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import './App.css'
import logo from './logo.svg'
import MoviesList from './components/MoviesList'
import MovieDetail from './components/MovieDetail'

const App = () => {
  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <Link to='/'>
            <img src={logo} className='App-logo' alt='logo' />
          </Link>
        </header>
        <Switch>
          <Route exact path='/' component={MoviesList} />
          <Route path='/:id' component={MovieDetail} />
        </Switch>
      </div>
    </Router>
    // <Router>
    //   <div className='App'>
    //     <header className='App-header'>
    //       <Link to='/'>
    //         <img src={logo} className='App-logo' alt='logo' />
    //       </Link>
    //     </header>
    //     <Switch>
    //       <Route exact path='/' component={MoviesList} />
    //       <Route path='/:id' component={MovieDetail} />
    //     </Switch>
    //   </div>
    // </Router>
  )
}

export default App
