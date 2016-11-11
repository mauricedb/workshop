import React, { Component } from 'react';
import LoginPage from './login-page';
import PlayingMovie from './playing-movie';
import MainPage from './main-page';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
      playing: null,
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
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e);
      }
    }
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
  }

  render() {
    const { user, playing } = this.state;
    let component = null;

    if (!user) {
      component = <LoginPage loginAsUser={this.loginAsUser} />;
    } else if (playing) {
      component = <PlayingMovie movie={playing} stopPlaying={this.stopPlaying} />;
    } else {
      component = <MainPage user={user} startPlaying={this.startPlaying} />;
    }

    return (
      <div className="container">
        {component}
      </div>
    );
  }
}

export default App;
