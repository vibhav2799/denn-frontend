import React, {Component} from 'react';
import {Router, Route, Link, RouteHandler} from 'react-router';
import YouTube from 'react-youtube';

export function check() {
  fetch('http://127.0.0.1:5000/watch', {
    method : 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin' : '*'
      },
      body: JSON.stringify({
        id: 15,
        friend_id: 16
    })
  }).then(response => response.json())
  .then(json =>{
    console.log(json)
    if (json['state'] == 'pause') {

    } else if (json['state'] == 'play') {
    }
    check();
});
}

class YouTubePlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
        video : ''
    }
}  


    render() {
      console.log('t');
        const opts = {
          height: '390',
          width: '640',
          playerVars: { // https://developers.google.com/youtube/player_parameters
            autoplay: 1
          }
        };
     
        return (
          <YouTube
            videoId="2g811Eo7K8U"
            opts={opts}
            onReady={check()}
            onStateChange={this.onPlayerStateChange}
          />
        );
      }
     
      _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.playVideo();
      }

      onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PAUSED) {
          console.log('t')
        }

        if (event.data == YT.PlayerState.PLAYING) {
          console.log('play')
        }
      }

      pauseVideo() {
        console.log('bros')
        event.target.pauseVideo();
      }

      playVideo() {
        console.log('brost')
        event.target.playVideo();
      }
}

export default YouTubePlayer;