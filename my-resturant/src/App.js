import logo from './logo.svg';
import './App.css';
import { AppBar, Typography, Toolbar, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
function App() {
  return (
    <div className="App">
      <AppBar position="static">
  <Toolbar variant="dense">
    <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
      <MenuIcon />
    </IconButton>
    <Typography variant="h6" color="inherit" component="div">
      Photos
    </Typography>
  </Toolbar>
</AppBar>
    </div>
  );
}

export default App;
