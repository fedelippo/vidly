import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./input";

class Form extends Component {
  state = {
    data: {},
    errors: {},
  };

  validate = () => {
    const { error } = Joi.validate(this.state.data, this.schema, {
      abortEarly: false,
    });
    if (!error) return {};

    const errors = {};

    for (let item of error.details) errors[item.path[0]] = item.message;

    return errors;
    // const errors = {};
    // const { account } = this.state;
    // if (account.username.trim() === "")
    //   errors.username = "Username is required";
    // if (account.password.trim() === "")
    //   errors.password = "Password is required";
    // return Object.keys(errors).length === 0 ? {} : errors;
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value }; //{ username: ..., password: ...}
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);

    return error ? error.details[0].message : null;

    // if (name === "username") {
    //   if (value.trim() === "") return "Username is required";
    // }

    // if (name === "password") {
    //   if (value.trim() === "") return "Password is required";
    // }
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const errors = this.validate();
    console.log(errors);
    this.setState({ errors });
    if (errors) return;

    this.doSubmit();
  };

  handleChange = ({ currentTarget: input }) => {
    // form input validation
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name]; // clear up existing errors on that property

    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data, errors });
  };

  renderButton(label) {
    return <button className="bt bt-primary">{label}</button>;
  }

  renderInput(username, label, type = "text") {
    const { data, errors } = this.state;

    return (
      <Input
        type={type}
        value={data[username]}
        label={label}
        name={username}
        error={errors[username]}
        onChange={this.handleChange}
      />
    );
  }
}

export default Form;
