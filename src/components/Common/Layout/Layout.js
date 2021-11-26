import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useHistory } from 'react-router';
const Layout = (props) => {
    const { children, isAuth } = props;
    const history = useHistory();
    const handleLogout = (e) => {
        history.replace('/')
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
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                QUIZ APP
                            </Typography>
                            {isAuth?<Button color="inherit">Admin</Button>: <Button color="inherit">Admin</Button>}
                            {isAuth? <Button color="inherit" onClick={handleLogout}>Logout</Button>:<Button color="inherit" onClick={handleLogout}>LOGIN</Button>}
                        </Toolbar>
                    </AppBar>
                </Box>
                <main>{children}</main>
            </div>
        )
   
   
}

export default Layout;


