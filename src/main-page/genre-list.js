import React, { Component } from 'react';
import GenreRow from './genre-row';

class GenreList extends Component {
  render() {
      const {movies, startPlaying} = this.props;
      const allGenres = {};

      movies.forEach(movie => {
          movie.genre.forEach(genre => {
              if (allGenres[genre]) {
                  allGenres[genre].push(movie);
              } else {
                  allGenres[genre] = [movie];
              }
            })
      });

    const genres = Object.keys(allGenres).sort();

    return (
      <div>
        {genres.map(genre => 
            <GenreRow key={genre} 
                      genre={genre} 
                      movies={allGenres[genre]} 
                      startPlaying={startPlaying} />)}
      </div>
    );
  }
}

export default GenreList;
