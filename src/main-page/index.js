import React, { Component } from 'react';
import Header from './header'
import Movies from './movies';

class MainPage extends Component {
  render() {
    const {user} = this.props;

    return (
      <div>
        <Header user={user}/>
        <Movies />
      </div>
    );
  }
}

MainPage.propTypes = {
    user: React.PropTypes.object.isRequired
}

export default MainPage;
