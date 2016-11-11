import React, { Component, PropTypes } from 'react';
import AjaxLoading from '../utils/ajax-loading';
import Billboard from './billboard';
import GenreList from './genre-list';

export class MoviesPresentation extends Component {
  render() {
    const { movies, startPlaying } = this.props;

    return (
      <div>
        <Billboard movie={movies[0]} />
        <GenreList movies={movies} startPlaying={startPlaying} />
      </div>
    );
  }
}

MoviesPresentation.propTypes = {
  movies: PropTypes.array.isRequired,
  startPlaying: PropTypes.func.isRequired,
};


export class MoviesContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: null,
    };
  }

  componentDidMount() {
    fetch('/movies.json')
            .then(rsp => rsp.json())
            .then(movies => this.setState({ movies }));
  }

  render() {
    const { startPlaying } = this.props;
    const { movies } = this.state;

    return (
      <div>
        {movies
                    ? <MoviesPresentation movies={movies} startPlaying={startPlaying} />
                    : <AjaxLoading />}
      </div>
    );
  }
}

MoviesContainer.propTypes = {
  startPlaying: PropTypes.func.isRequired,
};

export default MoviesContainer;
