import React, { Component } from "react";

export default class Card extends Component {
  render() {
    return (
      <div className="tc bg-light-green grow br3 pa3 ma2 dib bw2 shadow-5">
        <img src={`https://robohash.org/${this.props.id}`} />
        <h2>{this.props.name}</h2>
        <p>{this.props.email}</p>
      </div>
    );
  }
}
