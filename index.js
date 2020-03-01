import React, { Component } from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import Login from "./Login/login";
import "./style.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: { resting: "chandni" },
      user: 3
    };
  }

  render() {
    if (this.state.user === 2) {
      return (
        <div>
          <Hello name={this.state.name.resting} />
          <p>Start test editing to see some magic happen</p>
        </div>
      );
    }
    else{
      return(
        <div>
        <Login loginValue="Logged in"/>
        <h1>{this.state.name.resting === "chandni"?"good morning":"end"}</h1>
        </div>
      );
    }
  }
}

render(<App />, document.getElementById("root"));
