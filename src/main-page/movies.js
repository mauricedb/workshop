import React, { Component } from 'react';
import AjaxLoading from '../utils/ajax-loading';
import JumboMovie from './jumbo-movie';
import GenreList from './genre-list';

export class MoviesPresentation extends Component {
  render() {
      const {movies} = this.props;

    return (
      <div>
        <JumboMovie movie={movies[0]} />
        <GenreList movies={movies} />
      </div>
    );
  }
}

export class MoviesContainer extends Component {
    constructor() {
        super();

        this.state = {
            movies: null
        }
    }

    componentDidMount() {
        fetch('/movies.json')
            .then(rsp => rsp.json())
            .then(movies => this.setState({movies}));
    }

    render() {
        const {movies} = this.state;

        return (
            <div>
                { movies ? <MoviesPresentation movies={movies} /> :  <AjaxLoading />}
            </div>
        );
    }
}

export default MoviesContainer;
