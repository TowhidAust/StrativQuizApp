import React from 'react'
import { Redirect, Route } from 'react-router';

export default function ProtectedRoute(props) {
    const {auth, component: Component, ...rest} = props;
    return (
        <Route {...rest} render={(props)=>{
            if(auth) return <Component {...props}/>
            if(!auth) return <Redirect to={{path:"/home", state: props.location}}/>
        }}>
            
        </Route>
    )
}
