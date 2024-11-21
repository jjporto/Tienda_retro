import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box
      sx={{
        width: 250,
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        padding: '15px 0',
        backgroundColor: '#f0f0f0',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        '@media (max-width: 600px)': {
          width: '100vw',
        },
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <Box sx={{ padding: '10px' }}>
        <Box
          component="h3"
          sx={{ fontSize: '1.5rem', marginBottom: '15px', color: '#333' }}
        >
          Categorías
        </Box>
        <List sx={{ padding: 0 }}>
          <ListItem disablePadding sx={{ marginBottom: '10px' }}>
            <ListItemButton
              component={Link}
              to="/category/Retro"
              sx={{
                padding: '10px 15px',
                backgroundColor: '#fff',
                color: '#333',
                textDecoration: 'none',
                borderRadius: '8px',
                transition: 'all 0.3s',
                fontWeight: 600,
                '&:hover': {
                  backgroundColor: '#cae0ee',
                  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)',
                },
              }}
            >
              <ListItemText primary="Retros" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{ marginBottom: '10px' }}>
            <ListItemButton
              component={Link}
              to="/category/Camisetas2425"
              sx={{
                padding: '10px 15px',
                backgroundColor: '#fff',
                color: '#333',
                textDecoration: 'none',
                borderRadius: '8px',
                transition: 'all 0.3s',
                fontWeight: 600,
                '&:hover': {
                  backgroundColor: '#cae0ee',
                  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)',
                },
              }}
            >
              <ListItemText primary="Temporada 24/25" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{ marginBottom: '10px' }}>
            <ListItemButton
              component={Link}
              to="/category/Kids"
              sx={{
                padding: '10px 15px',
                backgroundColor: '#fff',
                color: '#333',
                textDecoration: 'none',
                borderRadius: '8px',
                transition: 'all 0.3s',
                fontWeight: 600,
                '&:hover': {
                  backgroundColor: '#cae0ee',
                  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)',
                },
              }}
            >
              <ListItemText primary="Kids" />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
      </Box>
    </Box>
  );

  return (
    <Box
      sx={{
        position: 'absolute',
        top: '10px',
        right: '10px',
        zIndex: 1200,
      }}
    >
      <Button
        variant="contained"
        onClick={toggleDrawer(true)}
        sx={{
          background: 'black',
          color: 'white',
          '&:hover': {
            backgroundColor: '#333',
          },
        }}
      >
        Categorías
      </Button>
      <Drawer
        anchor="right" 
        open={open}
        onClose={toggleDrawer(false)}
        sx={{
          '& .MuiDrawer-paper': {
            backgroundColor: '#f0f0f0',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          },
        }}
      >
        {DrawerList}
      </Drawer>
    </Box>
  );
};

export default Sidebar;
