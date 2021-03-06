import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useHistory } from 'react-router';
import useAuth from '../CustomHooks/useAuth';
const Layout = (props) => {
    const { children } = props;
    const history = useHistory();
    const [isAuth, setIsAuth] = useState(false);
    // eslint-disable-next-line
    const [auth, login, logout] = useAuth();

    useEffect(() => {
        localStorage.getItem('isAuth') === 'true' ? setIsAuth(true) : setIsAuth(false);
    }, [login])

    const handleLogout = () => {
        logout();
        setIsAuth(false);
        history.push({pathname: '/login'})
    }

    const handleLogin = () => {
        history.push({pathname: '/login'})
    }
    
    const logoClickHandler = () => {
        history.push('/')
    }

    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1, cursor: "pointer" }} onClick={logoClickHandler}>
                            QUIZ APP
                        </Typography>
                        {/* {isAuth === true ? <Button color="inherit">Admin</Button> : <Button color="inherit">Admin</Button>} */}
                        {isAuth === true ? <Button color="inherit" onClick={handleLogout}>LOGOUT</Button> : <Button color="inherit" onClick={handleLogin}>LOGIN</Button>}
                    </Toolbar>
                </AppBar>
            </Box>
            <main>{children}</main>
        </div>
    )


}

export default Layout;


