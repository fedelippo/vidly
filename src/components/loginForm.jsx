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

  validateProperty = ({ name, value }) => {
    if (name === "username") {
      if (value.trim() === "") return "Username is required";
    }

    if (name === "password") {
      if (value.trim() === "") return "Password is required";
    }
  };
  handleChange = ({ currentTarget: input }) => {
    // form input validation
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name]; // clear up existing errors on that property

    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account, errors });
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
