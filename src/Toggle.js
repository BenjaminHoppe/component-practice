import React, { Component } from 'react'

export default class Toggle extends Component {
  state = {
    on: false,
  }

  toggle = () => {
    this.setState({
      on: !this.state.on
    })
  }

  render() {
    return (
      <div>
      <button onClick={this.toggle}>Show/Hide</button>

      {/* Has a set return value being called */}
      {/* {this.state.on && (
        <h1>Toggle Me</h1>
      )} */}
      {/* Takes children of componet being called */}
      {this.state.on && this.props.children}
      </div>
    )
  }
}
