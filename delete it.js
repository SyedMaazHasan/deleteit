import React, { Component } from "react";
class EventElement extends Component {
  state = {};

  handleparentButtonClicked = (e) => {
    console.log("parent clicked");
  };
  handleChildButtonClicked = (e) => {
    console.log("child clicked");
  };
  render() {
    return (
      <button onClick={(e)=>this.handleparentButtonClicked(e)}>
        parent button
        <button onClick={(e) => this.handleChildButtonClicked(e)}>
          child button
        </button>
      </button>
    );
  }
}

export default EventElement;
