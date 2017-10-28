import React, { Component } from 'react'
import './App.css'
import Header from './header/Header'
import Player from './player/Player'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Header />
        <div className='Body'>
          <Player />
        </div>
      </div>
    )
  }
}

export default App
