import React, { Component } from "react";
import ReactDOM from "react-dom/client";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "hello react",
    };
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("react_app"));
root.render(<App />);
