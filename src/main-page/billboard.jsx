import React, { Component, PropTypes } from 'react';

class Billboard extends Component {
  render() {
    const { movie } = this.props;

    return (
      <div className="row">
        <div className="title">
          {movie.title}
        </div>
        <img
          className="img-responsive"
          alt={movie.title}
          src={`http://image.tmdb.org/t/p/w1280/${movie.backdrop_path}`}
        />
      </div>
    );
  }
}

Billboard.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default Billboard;
