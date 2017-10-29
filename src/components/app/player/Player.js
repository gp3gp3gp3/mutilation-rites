import React, { Component } from 'react'
import './Player.css'

class Player extends Component {
  render () {
    return (
      <div
        className='bandcamp-frame'
      >
        <iframe
          title='MutilationRitesBandcampPlayer'
          className='bandcamp-player'
          src='https://bandcamp.com/EmbeddedPlayer/album=587652126/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/'
          seamless
        >
          <a href='http://mutilationrites.bandcamp.com/album/empyrean'>Empyrean by Mutilation Rites</a>
        </iframe>
      </div>
    )
  }
}

export default Player
