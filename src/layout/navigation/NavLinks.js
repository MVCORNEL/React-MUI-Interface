import React from 'react';
import { Box, Link } from '@mui/material';
import { NavLink as RouterLink } from 'react-router-dom';
import navBarItems from './../../consts/navbarItems';

/**
 * Represents the list of navigable links(pages) based on a list of navigable items (for xs devices the links will be hidden)
 *
 * @see {navBarItems}
 * @prop {function} handleCloseBarMenu -callback that is responsible for closing userMenu(settings bar)
 *
 */

const NavLinks = React.memo(({ handleCloseNavMenu }) => {
  let linkActiveStyle = ({ isActive }) =>
    isActive
      ? {
          color: '#ff3366',
        }
      : undefined;

  const linkStyle = (theme) => ({
    my: 3,
    display: 'block',
    fontWeight: 500,
    margin: 3,
    textDecoration: 'none',
    alignSelf: 'center',
    fontSize: '1.8rem',
    color: '#111',

    '&:hover': {
      textDecoration: 'underline',
      textUnderlineOffset: '5px',
    },
  });

  return (
    <Box
      sx={{
        flexGrow: 1,
        justifyContent: 'flex-end',
        marginRight: '1rem',
        display: { xs: 'none', md: 'flex' },
      }}
    >
      {navBarItems.map((item) => {
        return (
          <Link
            key={item.id}
            to={item.route}
            onClick={handleCloseNavMenu}
            component={RouterLink}
            sx={linkStyle}
            style={linkActiveStyle}
          >
            {item.label}
          </Link>
        );
      })}
    </Box>
  );
});

export default NavLinks;
