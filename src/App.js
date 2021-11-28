// import * as React from "react";
import React, { useEffect, useState } from "react"
import { Route, Switch } from "react-router-dom";
import Login from "./components/Auth/Login";
import './styles/index.scss';
import Layout from "./components/Common/Layout/Layout";
import Admin from "./components/Admin";
import Student from "./components/Student";
import ProtectedRoute from "./components/Common/ProtectedRoute/ProtectedRoute";
import Home from "./components/Home";
import useAuth from "./components/Common/CustomHooks/useAuth";

function App() {
  const [isAuth, login] = useAuth(false);
  const loginCallback = () => login();
  console.log('appjs',isAuth);
  useEffect(() => {
    
  }, [])

  return (
    <Layout isLoggedIn = {isAuth}>
      <div className="quiz-app-root">
        <Switch>
          <Route path="/" exact>
            <Home/>
          </Route>
          <Route path="/login">
            <Login loginCallback={loginCallback}/>
          </Route>
          <ProtectedRoute path="/admin" component={Admin}/>
          <Route path="/student">
            <Student />
          </Route>
        </Switch>
      </div>
    </Layout>
  );
}

export default App;