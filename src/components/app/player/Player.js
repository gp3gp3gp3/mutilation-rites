import React, { Component } from 'react'
import './Player.css'

class Player extends Component {
  render () {
    return (
      <div className='bandcamp-frame'>
        <iframe
          title='MutilationRitesBandcampPlayer'
          className='bandcamp-player'
          src='https://bandcamp.com/EmbeddedPlayer/album=587652126/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/'
          seamless
        >
          <a href='http://mutilationrites.bandcamp.com/album/empyrean'>Empyrean by Mutilation Rites</a>
        </iframe>
        <iframe
          title='MutilationRitesSpotifyWidget'
          src='https://open.spotify.com/follow/1/?uri=spotify:artist:60NhaZmTGP7euQlDDXjmmN&size=detail&theme=dark'
          className='spotify-widget'
          scrolling='no'
          frameBorder='0'
          allowTransparency
        />
      </div>
    )
  }
}

export default Player
