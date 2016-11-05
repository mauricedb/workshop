import React, {Component} from 'react';

class PlayingMovie extends Component {
  render() {
    const {movie} = this.props;
    return (
      <div className="row">
        <div className="title">
          <h1>{movie.title}</h1>

          <div class="video-container">
            <iframe
              src="https://www.youtube.com/embed/6hB3S9bIaco?autoplay=1"
              frameBorder="0"
              allowFullScreen
              className="video"></iframe>
          </div>
        </div>
      </div>
    );
  }
}

export default PlayingMovie;
