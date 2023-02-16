import { AppBar } from '@mui/material';
import MenuIcon from '@material-ui/icons/Menu';
import { Drawer, MenuList } from '@material-ui/core';
import { useState } from 'react';
import { IconButton } from '@material-ui/core';
import { MenuItem } from '@material-ui/core';
import { ListItemText, ListItemIcon } from '@mui/material';
import { Home, Star, Person } from '@material-ui/icons';
import newStore from '../Store/module';
import SignOutGoogle from '../Logout/SignoutGoogle';
import { SigninGoogle } from '../Login/SignInGoogle';

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [loginmodal, setloginModal] = useState<boolean>(false);
  return (
    <AppBar position="static">
      <IconButton onClick={() => setOpen(!open)}>
        <MenuIcon />
      </IconButton>

      <Drawer open={open}>
        <MenuList
          onClick={() => setOpen(!open)}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '15px',
            justifyContent: 'center',
          }}
        >
          <MenuItem>
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText>Home</ListItemText>
          </MenuItem>
          <MenuItem
            onClick={() => {
              setloginModal(!loginmodal);
            }}
          >
            <SigninGoogle />
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <Star />
            </ListItemIcon>
            <SignOutGoogle />
          </MenuItem>
        </MenuList>
        <MenuList>
          <ListItemIcon>
            <Person />
            <ListItemText>
              {newStore.getState().persist.user.email}
            </ListItemText>
          </ListItemIcon>
        </MenuList>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
