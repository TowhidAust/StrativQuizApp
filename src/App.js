// import * as React from "react";
import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./components/Auth/Login";
import './styles/index.scss';
import Admin from "./components/Admin";
import Student from "./components/Student";
import ProtectedRoute from "./components/Common/ProtectedRoute/ProtectedRoute";
import Home from "./components/Home";
import useAuth from "./components/Common/CustomHooks/useAuth";

function App() {
  // eslint-disable-next-line
  const [isAuth, login] = useAuth(false);
  const loginCallback = () => login();

  return (
    <Router>
      <div className="quiz-app-root">
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/login">
            <Login loginCallback={loginCallback} />
          </Route>
          <ProtectedRoute path="/admin" component={Admin}/>
          <ProtectedRoute path="/student" component={Student}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;