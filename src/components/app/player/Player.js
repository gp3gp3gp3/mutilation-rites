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
        <div className='link-wrapper'>
          <a href='http://www.google.com'>
            <p className='link'>PRESS PACKAGE</p>
          </a>
        </div>
        <div className='social-buttons-wrapper'>
          <a target='_blank' href='https://www.facebook.com/mutilationritesnyc/'>
            <i
              class='fa fa-facebook-square fa-3x'
              aria-hidden='true'
            />
          </a>
          <a target='_blank' href='https://www.instagram.com/mutilationrites/'>
            <i
              class='fa fa-instagram fa-3x'
              aria-hidden='true'
            />
          </a>
          <a target='_blank' href='https://twitter.com/mutilationrites'>
            <i
              class='fa fa-twitter-square fa-3x'
              aria-hidden='true'
            />
          </a>
        </div>
      </div>
    )
  }
}

export default Player
