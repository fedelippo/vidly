import "./App.css";
import { ToastContainer } from "react-toastify";
import Movies from "./components/movies";
import { Route, Redirect, Switch } from "react-router-dom";
import Customers from "./components/common/customers";
import Rentals from "./components/common/rentals";
import NotFound from "./components/common/notFound";
import NavBar from "./components/common/navBar";
import React, { Component } from "react";
import MovieForm from "./components/common/movieForm";
import LoginForm from "./components/loginForm";
import "react-toastify/dist/ReactToastify.css";
import RegisterForm from "./components/registerForm";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <ToastContainer />
        <NavBar />
        <main className="container">
          <Switch>
            <Route path="/login" component={LoginForm} />
            <Route path="/register" component={RegisterForm} />
            <Route path="/movies/:id" component={MovieForm} />
            <Route path="/movies" component={Movies} />
            <Route path="/customers" component={Customers} />
            <Route path="/rentals" component={Rentals} />
            <Route path="/not-found" component={NotFound} />
            {/** if we do not use exact any wrong url will match the
             * home page anyway therefore we want that the redirect to be applied
             * to the hompage only
             */}
            <Redirect from="/" exact to="/movies" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
