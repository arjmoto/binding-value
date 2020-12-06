import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      newValue: "",
      textValue: ""
    };
    this.onKeyUp = this.onKeyUp.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onKeyUp(event) {
    let text = event.target.value;
    if (event.keyCode === 13) {
      if (!text) {
        return;
      }
      text = text.trim();
      if (!text) {
        return;
      }
      this.setState({
        newValue: "",
        textValue: text
      });
    }
  }
  onChange(event) {
    this.setState({
      newItem: event.target.value
    });
  }
  render() {
    const { textValue, newValue } = this.state;

    return (
      <div className="App">
        <h2>Binding value</h2>
        <p>Hello, {textValue} </p>
        <div className="header">
          <input
            type="text"
            value={newValue}
            placeholder="Nhập tên của bạn"
            onChange={this.onChange}
            onKeyUp={this.onKeyUp}
          />
        </div>
      </div>
    );
  }
}

export default App;
