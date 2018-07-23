import React, {Component} from 'react';
import {Router, Route, Link, RouteHandler} from 'react-router';
import YouTube from 'react-youtube';

class YouTubePlayer extends Component {

    check() {
      console.log('called')
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
        console.log(json);
    });
    }

    render() {
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
            onReady={this.check}
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
          this.check;
          console.log("paused");
        }

        if (event.data == YT.PlayerState.PLAYING) {
          this.check;
          console.log("playing");
        }
      }
}

export default YouTubePlayer;