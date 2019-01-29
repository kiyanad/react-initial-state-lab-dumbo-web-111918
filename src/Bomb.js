// your Bomb code here!
import React from 'react'


 class Bomb extends React.Component {

state = {
  secondsLeft: this.props.initialCount
}

  render() {
    // debugger
    if(this.state.secondsLeft === 0){
      return <h1>Boom!</h1>
      // debugger
    }
    else {
    return <h1>{this.state.secondsLeft} seconds left before I go boom!</h1>
  }
  }

}

export default Bomb
