import React, { Component, PropTypes } from 'react';
import Header from './header';
import Billboard from './billboard';
import GenreList from './genre-list';

class MainPage extends Component {
  render() {
    const { user, movies, startPlaying } = this.props;

    return (
      <div>
        <Header user={user} />
        <Billboard movie={movies[0]} />
        <GenreList movies={movies} startPlaying={startPlaying} />
      </div>
    );
  }
}

MainPage.propTypes = {
  user: PropTypes.object.isRequired,
  movies: PropTypes.array.isRequired,
  startPlaying: PropTypes.func.isRequired,
};

export default MainPage;
