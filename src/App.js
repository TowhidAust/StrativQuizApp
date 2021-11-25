// import * as React from "react";
import React from "react"
import { Route, Switch } from "react-router-dom";
import Login from "./components/Auth/Login";
import './styles/index.scss';
import Layout from "./components/Layout/Layout";
import Admin from "./components/Admin";
import Student from "./components/Student";
import ProtectedRoute from "./components/Common/ProtectedRoute/ProtectedRoute";
import { useHistory } from 'react-router';
import useAuth from "./components/Common/CustomHooks/useAuth";

function App() {
  const [isAuth, login, logout] = useAuth(false);
  const loginButtonClick = () => {
    login()
  }
  return (
    <Layout>
      <div className="quiz-app-root">
        <Switch>
          <Route path="/" exact> 
            <Login isAuth={isAuth} loginButtonClick={loginButtonClick}/>
          </Route>
          <ProtectedRoute path="/admin" component={Admin} auth={isAuth}/> 
          <Route path="/student"> 
            <Student/>
          </Route>
        </Switch>
      </div>
    </Layout>
  );
}

export default App;