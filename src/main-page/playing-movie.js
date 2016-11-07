import React, {Component} from 'react';
import './playing-movie.css';

class PlayingMovie extends Component {
  render() {
    const {movie, stopPlaying} = this.props;
    
    return (
      <div className="row">
        <div className="title">
          <h1>{movie.title}
            <span className="pull-right" onClick={stopPlaying}>
              <i className="glyphicon glyphicon-remove"/>
            </span>
          </h1>

          <iframe
            src="https://www.youtube.com/embed/6hB3S9bIaco?autoplay=1"
            frameBorder="0"
            allowFullScreen
            className="video"></iframe>
        </div>
      </div>
    );
  }
}

export default PlayingMovie;
