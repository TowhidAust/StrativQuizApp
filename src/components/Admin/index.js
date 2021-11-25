import React, { useEffect } from 'react'
import useAuth from '../Common/CustomHooks/useAuth';

export default function Admin(props) {
    const [isAuth, login, logout] = useAuth(true);
    return (
        <div className="admin-root">
            <button onClick={logout}>Logout</button>
        </div>
    )  
}
