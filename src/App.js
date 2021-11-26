// import * as React from "react";
import React from "react"
import { Route, Switch } from "react-router-dom";
import Login from "./components/Auth/Login";
import './styles/index.scss';
import Layout from "./components/Common/Layout/Layout";
import Admin from "./components/Admin";
import Student from "./components/Student";
import ProtectedRoute from "./components/Common/ProtectedRoute/ProtectedRoute";
import useAuth from "./components/Common/CustomHooks/useAuth";

function App() {
  const [isAuth, login] = useAuth(false);
  const loginButtonClick = () => {login()}
  return (
    <Layout isAuth={isAuth}>
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