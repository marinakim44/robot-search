import React, { Component } from "react";
import Card from "./Card";

export default class CardList extends Component {
  render() {
    return (
      <div>
        {this.props.robots.map((r, i) => {
          return (
            <Card
              key={i}
              id={this.props.robots[i].id}
              name={this.props.robots[i].name}
              email={this.props.robots[i].email}
            />
          );
        })}
      </div>
    );
  }
}
