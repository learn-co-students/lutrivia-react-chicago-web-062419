import React, { Component } from "react";

class Submit extends Component {
  state = {
    name: ""
  };

  handleChange = event => {
    this.setState({ name: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.updateName(this.state.name);
  };

  render() {
    return (
      <div>
        <form
          ref={form => (this.form = form)}
          onSubmit={event => this.handleSubmit(event)}
        >
          <input
            onChange={event => this.handleChange(event)}
            type="text"
            placeholder="Name"
          />
          <input type="submit" value="Submit Score" />
        </form>
      </div>
    );
  }
}

export default Submit;
