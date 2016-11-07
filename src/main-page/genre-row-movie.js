import React, { Component, PropTypes } from 'react';

class GenreRowMovie extends Component {
  constructor(props) {
    super(props);

    this.expandMovie = this
            .expandMovie
            .bind(this);
  }

  expandMovie() {
    this
            .props
            .expandMovie(this.props.movie);
  }

  render() {
    const { movie } = this.props;

    return (
      <div className="col-sm-2 genre-row-movie">
        <div className="title">
          {movie.title}
        </div>
        <img
          className="img-responsive"
          alt={movie.title}
          src={`http://image.tmdb.org/t/p/w300/${movie.backdrop_path}`}
        />
        <div className="expand" onClick={this.expandMovie}>
          <i className="glyphicon glyphicon-chevron-down" />
        </div>
      </div>
    );
  }
}

GenreRowMovie.propTypes = {
  movie: PropTypes.object.isRequired,
  expandMovie: PropTypes.func.isRequired,
};

export default GenreRowMovie;
