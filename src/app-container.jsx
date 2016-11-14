import React, { Component } from 'react';
import AppPresentation from './app-presentation';

class AppContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
      playing: null,
      allMovies: null,
      filteredMovies: null,
    };

    this.loginAsUser = this.loginAsUser.bind(this);
    this.startPlaying = this.startPlaying.bind(this);
    this.stopPlaying = this.stopPlaying.bind(this);
    this.filterMovies = this.filterMovies.bind(this);
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
      .then(movies => this.setState({ allMovies: movies }));
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

  filterMovies(search) {
    let filteredMovies = null;

    if (search) {
      const searchLower = search.toLowerCase();
      const { allMovies } = this.state;
      filteredMovies = allMovies.filter(m => m.title.toLowerCase().indexOf(searchLower) !== -1);

      if (!filteredMovies.length) {
        filteredMovies = null;
      }
    }

    this.setState({ filteredMovies });
  }

  render() {
    const { user, allMovies, filteredMovies, playing } = this.state;

    return (
      <AppPresentation
        user={user}
        movies={filteredMovies || allMovies}
        playing={playing}
        loginAsUser={this.loginAsUser}
        startPlaying={this.startPlaying}
        stopPlaying={this.stopPlaying}
        filterMovies={this.filterMovies}
      />
    );
  }
}

export default AppContainer;
