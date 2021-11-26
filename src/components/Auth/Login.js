import { Grid, TextField, Button } from '@mui/material'
import { Box } from '@mui/system'
import { get } from 'lodash';
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router';
import { allUsers } from './Utils/helper'

export default function Login(props) {
    let history = useHistory();
    const {loginButtonClick} = props;
    const [users, setUsers] = useState([]);
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    useEffect(() => {
        console.log("Login renders");
        setUsers(allUsers);
    }, []);

    const onSubmit = async (e) => {
        let isUserExists = false;
        let role = 'admin';
        for(let userIndex in users) {
            const dbEmail = get(users[userIndex], 'email', null);
            const dbPassword = get(users[userIndex], 'password', null);
            const dbRole = get(users[userIndex], 'role', null);
            console.log(dbEmail, dbPassword, dbRole)
            if(email === dbEmail && password === dbPassword) {
                console.log("matched");
                isUserExists = true;
                role = dbRole;
                break;
            }
        }   

        if(isUserExists && role === 'admin') {
            loginButtonClick()
            history.push({
                pathname: "/admin",
                state: {
                    auth: true,
                }
            });
        } else if(isUserExists && role === 'student'){
            loginButtonClick()
            history.push({
                pathname: "/student",
                state: {
                    auth: true,
                }
            });
        }

        e.preventDefault();

    }

    const emailChangeHandler = (e) => {
        setEmail(e.target.value);
    }

    const passwordChangeHandler = (e) => {
        setPassword(e.target.value)
    }

    return (
        <div className="quiz-app-container login-root">
            <h1 className="login-title">Login</h1>
                <Box
                    component="form"
                    autoComplete="off"
                    onSubmit={onSubmit}
                    action={"#"}
                >
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField id="outlined-basic-1" label="email" type="email" variant="outlined" sx={{width:"100%"}} autoComplete="off" onChange={emailChangeHandler}/>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField id="outlined-basic-2" label="password" type="password" variant="outlined" sx={{width:"100%"}} autoComplete="off" onChange={passwordChangeHandler}/>
                        </Grid>
                    </Grid>
                    <div className="login-button-container">
                        <Button className="login-button" variant="contained" type="submit">Login</Button>
                    </div>
                </Box>
        </div>
    )
}
