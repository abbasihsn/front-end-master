// mostly code from react.js.org/docs/error-boundaries.html
import React, { Component } from "react";
import { Link, Redirect } from "@reach/router";

class ErrorBoundaries extends Component {
  state = { hasError: false, redirect:false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log("Error boundary caught an error", error, info);
  }

  componentDidUpdate(){
    if(this.state.hasError){
      setTimeout(()=>this.setState({ redirect:true}),5000);
    }
  }

  render() {
    if(this.state.redirect){
      return <Redirect to="/"/>
    }
    if (this.state.hasError) {
      return (
        <h1>
          خطا داریم <Link to="/">Click Here!</Link> to go back to the home page
          or wait five seconds.
        </h1>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundaries;
