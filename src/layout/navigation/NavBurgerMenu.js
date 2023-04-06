import { IconButton, Box, Menu } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import NavMenuItem from './NavMenuItem';
import navbarItems from './../../consts/navbarItems';

/**
 * Represents a dropdown menu, with a list of navigable links (hidden for devices with the screen higher than md)
 * Each menu item represents a route to a page.
 * 
 * @prop {function} handleOpenNavMenu - callback that is responsible for opening navigation menu 
 * @prop {function} handleCloseNavMenu -  callback that is responsible for closing navigation menu 
 * @prop {object} anchorElUser - object that hold the current anchored menu, used to show the state of the current menu (shown/hidden)

 */

const NavBurgerMenu = ({ handleOpenNavMenu, handleCloseNavMenu, anchorElNav }) => {
    return (
        <Box
            sx={{
                flexGrow: 1,
                display: { xxs: 'flex', md: 'none' },
            }}
        >
            <IconButton size="large" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleOpenNavMenu} color="inherit">
                <MenuIcon />
            </IconButton>
            <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                    display: {
                        xxs: 'block',
                        md: 'none',
                    },
                }}
            >
                {navbarItems.map((page) => (
                    <NavMenuItem key={page.id} label={page.label} route={page.route} handleCloseMenu={handleCloseNavMenu} />
                ))}
            </Menu>
        </Box>
    );
};

export default NavBurgerMenu;
