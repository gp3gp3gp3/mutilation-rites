import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './App.css'
import Header from './header/Header'
import Player from './player/Player'
import Tour from './tour/Tour'

class App extends Component {
  constructor () {
    super()
    this.scrollToRef = this.scrollToRef.bind(this)
  }

  scrollToRef (refName) {
    return () => {
      const node = ReactDOM.findDOMNode(this.refs[refName])
      window.scrollTo({
        left: 0,
        top: node.offsetTop - 20,
        behavior: 'smooth'
      })
    }
  }

  render () {
    return (
      <div className='App'>
        <Header scrollToRef={this.scrollToRef} />
        <div className='Body'>
          <Player ref='player' />
          <Tour ref='tour' />
        </div>
      </div>
    )
  }
}

export default App
