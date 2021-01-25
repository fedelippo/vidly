import React, { Component } from "react";
import Form from "./common/form";
import Joi from "joi-browser";
import Input from "./common/input";

class LoginForm extends Form {
  state = {
    account: { username: "", password: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  doSubmit = () => {
    // call the server
    console.log("Submitted!");
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
