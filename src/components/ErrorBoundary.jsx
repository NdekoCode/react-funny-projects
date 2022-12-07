import { Component } from "react";

export default class ErrorBoundary extends Component {
  render() {
    return this.props.children;
  }
}
