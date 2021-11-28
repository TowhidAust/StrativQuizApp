import { Button, Typography } from '@mui/material';
import React from 'react'
import { useHistory } from 'react-router'

export default function Home() {
    const history = useHistory();
    const loginButtonClickHandler = () => {
        history.push({
            pathname: "/login"
        });
    }
    return (
        <div className="home-root">
            <Typography variant="h3" className="home-title"> Welcome to Quiz App </Typography>
            <div className="home-login">
                <Button onClick={loginButtonClickHandler} variant="outlined">Login</Button>
            </div>
        </div>
    )
}
