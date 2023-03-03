import { MenuItem } from '@mui/material';
import { NavLink as RouterLink } from 'react-router-dom';

/**
 * Component used to display each individual MenuItem which will be contained by the Navigation Menu and Settings Menu.
 * Each Item menu will be a NavLink behind the scene taht will provide the destination to a route using the MenuItem styles.
 *
 * @prop {number} id - id element that will be used to uniquely identify each element of menu list
 * @prop {string} label -  label describing the path destination
 * @prop {string} route - the page's path, which will be navigabile by presing the NavMenuItem component
 * @prop {function} handleCloseMenu -  callback that is responsible for closing the current menu which the item belongs to(SeetingMenu or NavMenu)
 *
 */
const NavMenuItem = ({ id, label, route, handleCloseMenu }) => {
  //Current route/page is highlighted
  let activeStyle = ({ isActive }) =>
    isActive
      ? {
          backgroundColor: '#ff3366',
          color: 'white',
        }
      : {};

  return (
    <MenuItem
      key={id}
      onClick={handleCloseMenu}
      component={RouterLink}
      to={route}
      style={activeStyle}
      sx={{
        '&:hover': {
          backgroundColor: '#EFEFEF!important',
          color: '#555!important',
        },
      }}
    >
      {label}
    </MenuItem>
  );
};

export default NavMenuItem;
