import React from 'react'
import { Redirect, Route } from 'react-router';

export default function ProtectedRoute(props) {
    const {component: Component, ...rest} = props;
    const loginstatus = localStorage.getItem('isAuth') === 'true' ? true : false
    return (
        <Route {...rest} render={(props)=>{
            if(loginstatus) return <Component {...props}/>
            if(!loginstatus) return <Redirect to={{path:"/home", state: props.location}}/>
        }}>
        </Route>
    )
}
