import Box from '@mui/material/Box';
import { IconButton, Tooltip, Menu, Avatar } from '@mui/material';
import NavMenuItem from './NavMenuItem';
import userSettings from '../../consts/userSettings';
import LogoutForm from '../../forms/LogoutForm';

/**
 * Component used for showing and interactive settings box, all its options will be based on the list of userSetting elements.
 * Each menu item represents a route to a page.
 *
 * @see {userSettings}
 * @prop {function} handleOpenUserMenu - callback that is responsible for opening userMenu(settings bar)
 * @prop {function} handleCloseUserMenu -  callback that is responsible for closing userMenu(settings bar)
 * @prop {object} anchorElUser - object that hold the current anchored menu, used to show the state of the current menu (shown/hidden)
 * @prop {string}  - users's url image
 */

const NavSettingsBox = ({ handleOpenUserMenu, handleCloseUserMenu, anchorElUser, image }) => {
    return (
        <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="Remy Sharp" src={image} />
                </IconButton>
            </Tooltip>
            <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
            >
                {userSettings.map((setting) => (
                    <NavMenuItem key={setting.id} label={setting.label} route={setting.route} handleCloseMenu={handleCloseUserMenu} />
                ))}
                {/* LOGOUT */}
                <LogoutForm />
            </Menu>
        </Box>
    );
};

export default NavSettingsBox;
