import React, { Component } from 'react';
import GenreRowMovie from './genre-row-movie';
import ExpandedGenreRowMovie from './expanded-genre-row-movie';
import './genre-row.css';


class GenreRow extends Component {
    constructor() {
        super();

        this.state = {
          expandedMovie: null
        };

        this.expandMovie = this.expandMovie.bind(this);
    }
    
    expandMovie(movie) {
        // console.log('expanding', movie);
        this.setState({expandedMovie: movie});
    }

  render() {
      const {genre, movies, startPlaying} = this.props;
      const {expandedMovie} = this.state;
      // const expandedMovie = movies[0];

    return (
      <div className="row genre-row">
        <h2>{genre}</h2>
        
        {movies.slice(0, 6).map(movie => 
            <GenreRowMovie key={movie.id} 
                           movie={movie} 
                           expandMovie={this.expandMovie} />)}

        { expandedMovie ? 
          <ExpandedGenreRowMovie movie={expandedMovie} startPlaying={startPlaying} /> : 
          <div/> }
      </div>
    );
  }
}

export default GenreRow;
