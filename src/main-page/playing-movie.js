import React, { Component } from 'react';

class PlayingMovie extends Component {
  render() {
      const {movie} = this.props;
    return (
      <div className="row">
        <div className="title">
          <h1>{movie.title}</h1>

            <iframe width="560" height="315" src="https://www.youtube.com/embed/6hB3S9bIaco?autoplay=1" frameBorder="0" allowFullScreen></iframe>
        </div>
      </div>
    );
  }
}

export default PlayingMovie;
