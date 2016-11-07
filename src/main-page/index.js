import React, { Component } from 'react';
import Header from './header';
import Movies from './movies';
import PlayingMovie from './playing-movie';

class MainPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playing: null,
    };

    this.startPlaying = this
      .startPlaying
      .bind(this);
    this.stopPlaying = this
      .stopPlaying
      .bind(this);
  }

  startPlaying(movie) {
    this.setState({ playing: movie });
  }

  stopPlaying() {
    this.setState({ playing: null });
  }

  render() {
    const { user } = this.props;
    const { playing } = this.state;

    return (
      <div>
        <Header user={user} />
        {playing
          ? <PlayingMovie movie={playing} stopPlaying={this.stopPlaying} />
          : <Movies startPlaying={this.startPlaying} />}
      </div>
    );
  }
}

MainPage.propTypes = {
  user: React.PropTypes.object.isRequired,
};

export default MainPage;
