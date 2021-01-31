import React, { Component } from "react";
import Form from "./common/form";
import Joi from "joi-browser";
import Input from "./common/input";

class LoginForm extends Form {
  state = {
    data: { username: "", password: "" },
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
    const { data, errors } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            value={data.username}
            label={"Username"}
            name={"username"}
            error={errors.username}
            onChange={this.handleChange}
          />
          <Input
            value={data.password}
            label={"Password"}
            name={"password"}
            error={errors.password}
            onChange={this.handleChange}
          />
          <button className="bt bt-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
