import React, { Component } from 'react';
import LoginPage from './login-page';
import MainPage from './main-page';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
    };

    this.loginAsUser = this
      .loginAsUser
      .bind(this);
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

  loginAsUser(user) {
    if (user.rememberMe) {
      localStorage.user = JSON.stringify(user);
    }
    this.setState({ user });
  }

  render() {
    const { user } = this.state;

    return (
      <div className="container">
        {this.state.user
          ? <MainPage user={user} />
          : <LoginPage loginAsUser={this.loginAsUser} />}
      </div>
    );
  }
}

export default App;
