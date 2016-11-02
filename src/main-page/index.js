import React, { Component } from 'react';
import Header from './header'

class MainPage extends Component {
  render() {
    const {user} = this.props;
    
    return (
      <div>
        <Header user={user}/>
      </div>
    );
  }
}

MainPage.propTypes = {
    user: React.PropTypes.object.isRequired
}

export default MainPage;
