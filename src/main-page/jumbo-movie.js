import React, {Component} from 'react';

class JumboMovie extends Component {
  render() {
    const {movie} = this.props;
    
    return (
      <div className="row">
        <div className="title">
          {movie.title}
        </div>
        <img
          className="img-responsive"
          alt={movie.title}
          src={`http://image.tmdb.org/t/p/w1280/${movie.backdrop_path}`}/>
      </div>
    );
  }
}

export default JumboMovie;
