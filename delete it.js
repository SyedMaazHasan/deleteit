import React, { Component } from "react";
class EventElement extends Component {
  state = {};

  handleparentButtonClicked = (e) => {
    console.log("parent clicked");
  };
  handleChildButtonClicked = (e) => {
    e.stopPropagation();
    
    console.log("child clicked");
  };
  render() {
    return (
      <button onClickCapture={(e)=>this.handleparentButtonClicked(e)}>
        parent button
        <button onClickCapture={(e) => this.handleChildButtonClicked(e)}>
          child button
        </button>
      </button>
    );
  }
}

export default EventElement;
