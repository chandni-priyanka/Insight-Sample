import React, { Component } from "react";
import { render } from "react-dom";


 export default class Login extends Component {
  constructor(props) {
    super(props);
    if(this.props.loginValue == ""){
      alert("abc");
    }
    else{
      alert("test")
    }
  }

  render() {
    return(
      <h1>This is login page:{this.props.loginValue}</h1>
    );
  }
}
