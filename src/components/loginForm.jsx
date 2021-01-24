import React, { Component } from "react";
import Input from "./common/input";

class LoginForm extends Component {
  state = {
    account: { username: "", password: "" },
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted!");
  };

  handleChange = (e) => {
    const account = { ...this.state.account };
    account[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ account });
  };

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            value={this.state.account.username}
            label={"Username"}
            name={"username"}
            onChange={this.handleChange}
          />
          <Input
            value={this.state.account.password}
            label={"Password"}
            name={"password"}
            onChange={this.handleChange}
          />
          <button className="bt bt-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
