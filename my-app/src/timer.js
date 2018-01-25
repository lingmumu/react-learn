import React, { Component } from 'react';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {seconds: 0}
  }

  tick () {
    this.setState((state, props) => { return { 
      seconds: state.seconds + 1
    }});
  }
  componentDidMount() {
    this.timer = setInterval(() => this.tick(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  render() {
    return (
      <div>
        {this.state.seconds}
      </div>
    );
  }
}

export default Timer;