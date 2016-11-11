import React, { Component, PropTypes } from 'react';
import Header from './header';
import Movies from './movies';

class MainPage extends Component {
  render() {
    const { user, startPlaying } = this.props;

    return (
      <div>
        <Header user={user} />
        <Movies startPlaying={startPlaying} />
      </div>
    );
  }
}

MainPage.propTypes = {
  user: PropTypes.object.isRequired,
  startPlaying: PropTypes.func.isRequired,
};

export default MainPage;
