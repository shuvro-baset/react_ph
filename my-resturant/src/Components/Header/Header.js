import React from 'react';
import { AppBar, Typography, Toolbar, IconButton, Button, TextField, Grid } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <Grid container>
            <AppBar position="static" sx={{ p: '2px 4px', display: 'flex', alignItems: 'center'}} >
                <Toolbar variant="dense"  >
                    <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                        <HomeIcon color="secondary" fontSize="large" />
                    </IconButton>
                    
                    <Button color="inherit"><NavLink to="/home">Home</NavLink></Button>
                    <Button color="inherit">About</Button>
                    <Button color="inherit">Restaurant </Button>
                    <Button color="inherit">Food</Button>
                    <Button color="inherit">Meal</Button>
                </Toolbar>
            </AppBar>
            
        </Grid>
    );
};

export default Header;