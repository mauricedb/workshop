import React, { Component, PropTypes } from 'react';
import LoginPage from './login-page';
import PlayingMovie from './playing-movie';
import MainPage from './main-page';
import AjaxLoading from './utils/ajax-loading';

class AppPresentation extends Component {
  render() {
    const { user, movies, playing, loginAsUser, startPlaying, stopPlaying } = this.props;
    let component = null;

    if (!user) {
      component = <LoginPage loginAsUser={loginAsUser} />;
    } else if (!movies) {
      component = <AjaxLoading />;
    } else if (playing) {
      component = <PlayingMovie movie={playing} stopPlaying={stopPlaying} />;
    } else {
      component = <MainPage user={user} movies={movies} startPlaying={startPlaying} />;
    }

    return (
      <div className="container">
        {component}
      </div>
    );
  }
}

AppPresentation.propTypes = {
  user: PropTypes.object,
  movies: PropTypes.array,
  playing: PropTypes.object,
  loginAsUser: PropTypes.func.isRequired,
  startPlaying: PropTypes.func.isRequired,
  stopPlaying: PropTypes.func.isRequired,
};


class AppContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
      playing: null,
      movies: null,
    };

    this.loginAsUser = this.loginAsUser.bind(this);
    this.startPlaying = this.startPlaying.bind(this);
    this.stopPlaying = this.stopPlaying.bind(this);
  }

  componentWillMount() {
    if (localStorage.user) {
      try {
        const user = JSON.parse(localStorage.user);
        this.setState({ user });
        this.fetchMovies();
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e);
      }
    }
  }

  fetchMovies() {
    fetch('/movies.json')
      .then(rsp => rsp.json())
      .then(movies => this.setState({ movies }));
  }

  startPlaying(movie) {
    this.setState({ playing: movie });
  }

  stopPlaying() {
    this.setState({ playing: null });
  }

  loginAsUser(user) {
    if (user.rememberMe) {
      localStorage.user = JSON.stringify(user);
    }
    this.setState({ user });
    this.fetchMovies();
  }

  render() {
    const { user, movies, playing } = this.state;

    return (
      <AppPresentation
        user={user}
        movies={movies}
        playing={playing}
        loginAsUser={this.loginAsUser}
        startPlaying={this.startPlaying}
        stopPlaying={this.stopPlaying}
      />
    );
  }
}

export default AppContainer;
