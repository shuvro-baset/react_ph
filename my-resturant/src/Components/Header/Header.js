import React from 'react';
import { AppBar, Typography, Toolbar, IconButton, Button, TextField } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
const Header = () => {
    return (
        <div>
            <AppBar position="static" sx={{ p: '2px 4px', display: 'flex', alignItems: 'center'}} >
                <Toolbar variant="dense"  >
                    <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                        <HomeIcon color="secondary" fontSize="large" />
                    </IconButton>
                    <Button color="inherit">Home</Button>
                    <Button color="inherit">About</Button>
                    <Button color="inherit">Restaurant </Button>
                    <Button color="inherit">Food</Button>
                    <Button color="inherit">Meal</Button>
                </Toolbar>
            </AppBar>
            <Typography><h1>Welcome to My Restaurant</h1></Typography>
            
        </div>
    );
};

export default Header;