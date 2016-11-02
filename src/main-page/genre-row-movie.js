import React, { Component } from 'react';

class GenreRowMovie extends Component {
  render() {
      const {movie} = this.props;

      return (
          <div className="col-sm-2 genre-row-movie ">
            <div className="title">
                {movie.title}
            </div>
            <img className="img-responsive" title={movie.title} src={`http://image.tmdb.org/t/p/w300/${movie.backdrop_path}`}/>
          </div>
          );
  }
}

export default GenreRowMovie;
