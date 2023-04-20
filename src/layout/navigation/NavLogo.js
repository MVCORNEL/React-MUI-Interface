import AdbIcon from '@mui/icons-material/Adb';
import React from 'react';
import { Typography } from '@mui/material';
import { NavLink as RouterLink } from 'react-router-dom';
/**
 * Component for displaying a navigation bar Logo and its text
 * 
 * @prop {string} variant expects any heading element between e.g {h1...h6}
 * @prop {object} display how an element is displayed based on break points  e.g { xxs: 'none', md: 'flex' }
 * @prop {number} flexGrow how much the item will grow

 */

const NavLogo = React.memo(({ variant, display, flexGrow }) => {
    return (
        // LOGO IMG
        <React.Fragment>
            <AdbIcon
                sx={{
                    display: { ...display },
                    mr: 1,
                }}
            />
            {/* LOGO TXT  */}
            <Typography
                variant={variant}
                noWrap
                component={RouterLink}
                to="/"
                sx={{
                    mr: 2,
                    display: { ...display },
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.5rem',
                    flexGrow: flexGrow,
                    color: 'inherit',
                    textDecoration: 'none',
                }}
            >
                LOGO
            </Typography>
        </React.Fragment>
    );
});

export default NavLogo;
