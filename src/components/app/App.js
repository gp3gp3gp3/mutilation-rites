import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './App.css'
import Header from './header/Header'
import Player from './player/Player'

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
        top: node.offsetTop,
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
        </div>
      </div>
    )
  }
}

export default App
