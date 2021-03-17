import React from 'react';

class Bomb extends React.Component {
  constructor(props) {
    super()
    this.state = {
      secondsLeft: props.initialCount
    }
  }

  renderTimer = () => {
    if(this.state.secondsLeft === 0) {
      return (
        <div>Boom!</div>
      )
    } else {
      return (
        <div>{this.state.secondsLeft} seconds left before I go boom!</div>
      )
    }
  }

  render() {
    return (
     this.renderTimer()
    )
  }
}

export default Bomb;