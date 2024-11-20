//primero

// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Sidebar.css';

// const Sidebar = () => {
//   return (
    
//     <aside style={{ width: '200px',  padding: '20px',height:'100vh' }}>
//       <h3>Categorías</h3>
//       <ul>
//         <li><Link to="/category/Retro">Retros</Link></li>
//         <li><Link to="/category/Camisetas2425"> temporada 24/25</Link></li>
//         <li><Link to="/category/Niños">Niños</Link></li>
//       </ul>
//     </aside>
//   );
// };

// export default Sidebar;

//segundo
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import Box from '@mui/material/Box';
// import Drawer from '@mui/material/Drawer';
// import Button from '@mui/material/Button';
// import List from '@mui/material/List';
// import Divider from '@mui/material/Divider';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemText from '@mui/material/ListItemText';

// const Sidebar = () => {
//   const [open, setOpen] = useState(false);
//   const toggleDrawer = (newOpen) => () => {
//     setOpen(newOpen);
//   };

//   const DrawerList = (
//     <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
//       <List>
//         <ListItem disablePadding>
//           <ListItemButton component={Link} to="/category/Retro">
//             <ListItemText primary="Retros" />
//           </ListItemButton>
//         </ListItem>
//         <ListItem disablePadding>
//           <ListItemButton component={Link} to="/category/Camisetas2425">
//             <ListItemText primary="Temporada 24/25" />
//           </ListItemButton>
//         </ListItem>
//         <ListItem disablePadding>
//           <ListItemButton component={Link} to="/category/Niños">
//             <ListItemText primary="Niños" />
//           </ListItemButton>
//         </ListItem>
//       </List>
//       <Divider />
//       {/* Puedes agregar más elementos aquí si deseas */}
//     </Box>
//   );

//   return (
//     <div>
//       <Button variant="contained" onClick={toggleDrawer(true)} style={{ margin: '10px', background:"red" }}>
//         Abrir Categorías
//       </Button>
//       <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
//         {DrawerList}
//       </Drawer>
//     </div>
//   );
// };

// export default Sidebar;


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
        display: "flex",
        padding: '15px 0 !important',
        backgroundColor: '#f0f0f0',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        borderRadius: '10px',
        '@media (max-width: 600px)': {
          width: '100vw', // Ancho completo en pantallas pequeñas
          height: '100vh',
          padding: '15px',
        },
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <Box sx={{width: "100%", padding: "10px"}}>
      <Box component="h3" sx={{ fontSize: '1.5rem', marginBottom: '15px', color: '#333' }}>
        Categorías
      </Box>
      <List sx={{ padding: 0 }}>
        <ListItem disablePadding sx={{ marginBottom: '10px' }}>
          <ListItemButton
            component={Link}
            to="/category/Retro"
            sx={{
              display: 'block',
              padding: '10px 15px',
              backgroundColor: '#fff',
              color: '#333',
              textDecoration: 'none',
              borderRadius: '8px',
              transition: 'background-color 0.3s, box-shadow 0.3s',
              fontWeight: 600,
              '&:hover': {
                backgroundColor: '#cae0ee',
                color: '#333',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)',
              },
              '&:active': {
                backgroundColor: '#a2d6e6',
                boxShadow: '0 3px 8px rgba(0, 0, 0, 0.2)',
                transform: 'scale(0.98)',
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
              display: 'block',
              padding: '10px 15px',
              backgroundColor: '#fff',
              color: '#333',
              textDecoration: 'none',
              borderRadius: '8px',
              transition: 'background-color 0.3s, box-shadow 0.3s',
              fontWeight: 600,
              '&:hover': {
                backgroundColor: '#cae0ee',
                color: '#333',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)',
              },
              '&:active': {
                backgroundColor: '#a2d6e6',
                boxShadow: '0 3px 8px rgba(0, 0, 0, 0.2)',
                transform: 'scale(0.98)',
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
              display: 'block',
              padding: '10px 15px',
              backgroundColor: '#fff',
              color: '#333',
              textDecoration: 'none',
              borderRadius: '8px',
              transition: 'background-color 0.3s, box-shadow 0.3s',
              fontWeight: 600,
              '&:hover': {
                backgroundColor: '#cae0ee',
                color: '#333',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)',
              },
              '&:active': {
                backgroundColor: '#a2d6e6',
                boxShadow: '0 3px 8px rgba(0, 0, 0, 0.2)',
                transform: 'scale(0.98)',
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
    <Box sx={{position:'absolute'}}>
      <Button
        variant="contained"
        onClick={toggleDrawer(true)}
        sx={{
          margin: '10px',
          background: 'Black',
          '@media (max-width: 600px)': {
            width: '100%',
          },
        }}
      >
        Categorías
      </Button>
      <Drawer
        anchor="left"
        open={open}
        onClose={toggleDrawer(false)}
        sx={{
          '& .MuiDrawer-paper': {
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
