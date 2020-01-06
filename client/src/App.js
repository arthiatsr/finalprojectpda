import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from "./components/Signin";
import Signin from "./components/Signin";
import Home from "./components/Home";
import Auth from "./pages/Auth";

const App = () => (
  <Router>
    <div>
      <Switch>
        {/* <Route exact path="/" component={SignUp} /> */}
        <Route exact path="/home" component={Login} />
        <Route exact path="/loggedin" component={Home} />
        <Route exact path="/" component={Auth} />
      </Switch>
    </div>
  </Router>
);

export default App;
