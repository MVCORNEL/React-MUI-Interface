import React from 'react';
import { Box, Link } from '@mui/material';
import { NavLink as RouterLink } from 'react-router-dom';
import navBarItems from './../../consts/navbarItems';

/**
 * Represents the list of navigable links(pages) based on a list of navigable items (for xs devices the links will be hidden)
 *
 * @see {navBarItems}
 * @prop {function} handleCloseBarMenu -callback that is responsible for closing userMenu(settings bar)
 */

const NavLinks = React.memo(({ handleCloseNavMenu }) => {
  let linkActiveStyle = ({ isActive }) =>
    isActive
      ? {
          textDecoration: 'underline ',
        }
      : undefined;

  const linkStyle = (theme) => ({
    my: 3,
    color: 'white',
    display: 'block',
    fontWeight: 500,
    margin: 2,
    textTransform: 'uppercase',
    alignSelf: 'center',
    fontSize: '0.875rem',
  });

  return (
    <Box
      sx={{
        flexGrow: 1,
        display: { xs: 'none', md: 'flex' },
      }}
    >
      {navBarItems.map((item) => {
        return (
          <Link key={item.id} to={item.route} onClick={handleCloseNavMenu} component={RouterLink} sx={linkStyle} style={linkActiveStyle}>
            {item.label}
          </Link>
        );
      })}
    </Box>
  );
});

export default NavLinks;
