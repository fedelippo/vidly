import React, { Component } from "react";
import Input from "./common/input";

class LoginForm extends Component {
  state = {
    account: { username: "", password: "" },
    errors: {},
  };

  validate = () => {
    const errors = {};
    const { account } = this.state;
    if (account.username.trim() === "")
      errors.username = "Username is required";
    if (account.password.trim() === "")
      errors.password = "Password is required";
    return Object.keys(errors).length === 0 ? {} : errors;
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const errors = this.validate();
    console.log(errors);
    this.setState({ errors });
    if (errors) return;

    // call the server
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
            error={this.state.errors.username}
            onChange={this.handleChange}
          />
          <Input
            value={this.state.account.password}
            label={"Password"}
            name={"password"}
            error={this.state.errors.password}
            onChange={this.handleChange}
          />
          <button className="bt bt-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
