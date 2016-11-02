import React, { Component } from 'react';


class ExpandedGenreRowMovie extends Component {
  render() {
    const {movie} = this.props;

    return (
      <div className='col-sm-12' style={{paddingLeft: 0}}>
        <div className='col-sm-4' style={{paddingLeft: 0}}>
          <img src={`http://image.tmdb.org/t/p/w300/${movie.poster_path}`} />
        </div>
        <div className='col-sm-8'>
            <h4 className='media-heading'>
              {movie.title}
            </h4>
            <div>
                <span>
                {movie.vote_average}
                <span>
                &nbsp;
                </span>
                {movie.release_date.slice(0, 4)}
                </span>
            </div>
            <p>
                {movie.overview}
            </p>
            <div>
                <span>
                    Genres:&nbsp;
                </span>
                <span>
                    {movie.genre.join(', ')}
                </span>
            </div>
        </div>
      </div>
    );
  }
}


export default ExpandedGenreRowMovie;
