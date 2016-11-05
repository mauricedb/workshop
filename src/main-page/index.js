import React, {Component} from 'react';
import Header from './header';
import Movies from './movies';
import PlayingMovie from './playing-movie';

class MainPage extends Component {
  constructor() {
    super();

    this.state = {
      playing: null
    };

    this.startPlaying = this
      .startPlaying
      .bind(this);
  }

  startPlaying(movie) {
    this.setState({playing: movie});
  }

  render() {
    const {user} = this.props;
    const {playing} = this.state;

    return (
      <div>
        <Header user={user}/> {playing
          ? <PlayingMovie movie={playing}/>
          : <Movies startPlaying={this.startPlaying}/>}
      </div>
    );
  }
}

MainPage.propTypes = {
  user: React.PropTypes.object.isRequired
}

export default MainPage;
