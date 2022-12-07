import { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
    };
  }
  static getDerivedStateFromError(error) {
    return { error: true };
  }
  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
  }
  render() {
    if (this.state.error) {
      return (
        <div className="p-3 border border-red-300 my-3 mx-1 rounded-md text-red-700 bg-red-50">
          Error lors du montage du composant
        </div>
      );
    }
    return this.props.children;
  }
}
