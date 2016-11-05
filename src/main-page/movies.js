import React, { Component } from 'react';
import AjaxLoading from '../utils/ajax-loading';
import JumboMovie from './jumbo-movie';
import GenreList from './genre-list';

// <JumboMovie movie={movies[0]} />

export class MoviesPresentation extends Component {
  render() {
      const {movies, startPlaying} = this.props;

    return (
      <div>
        
        <GenreList movies={movies} startPlaying={startPlaying}/>
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
        const {startPlaying} = this.props;
        const {movies} = this.state;

        return (
            <div>
                { movies ? 
                    <MoviesPresentation movies={movies} startPlaying={startPlaying} /> :  
                    <AjaxLoading />}
            </div>
        );
    }
}

export default MoviesContainer;
