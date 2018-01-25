import React, { Component } from 'react';

class HelloMsg extends Component {
  render() {
    return (
      <div>
        hello {this.props.name}
      </div>
    );
  }
}

export default HelloMsg;