import { useState } from 'react';
import { Link as RouterLink, useRouteLoaderData } from 'react-router-dom';
import { Toolbar, Container, Button, AppBar } from '@mui/material';
import NavLogo from './NavLogo';
import NavLinks from './NavLinks';
import NavBurgerMenu from './NavBurgerMenu';
import NavProfileBox from './NavSettingsBox';

/**
 * Represents the responsive application navigation bar component. The small screen renders a dropdown menu cotnaining a list of navigation links,
 * while for the wider screen the navigation bar will be displayed horizontaly.
 * User Settings Menu will be conditionaly displayed for logged in users, while the custom user has a login link button
 * which links a login page
 */
function Navbar() {
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);
    //user login state
    const user = useRouteLoaderData('root');

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="static" color="transparent" sx={{ boxShadow: 'none' }}>
            <Container maxWidth="lg">
                {/* LOGO */}
                <Toolbar disableGutters>
                    <NavLogo display={{ xxs: 'none', md: 'flex' }} variant="h5" flexGrow={0} />
                    {/* HAMBURGER MENU */}
                    <NavBurgerMenu handleCloseNavMenu={handleCloseNavMenu} handleOpenNavMenu={handleOpenNavMenu} anchorElNav={anchorElNav} />
                    {/* LOGO MIDDLE */}
                    <NavLogo display={{ xxs: 'flex', md: 'none' }} variant="h6" flexGrow={1} />
                    {/* LINKS */}
                    <NavLinks handleCloseNavMenu={handleCloseNavMenu} />
                    {/* PROFILE BOX */}
                    {user && (
                        <NavProfileBox
                            handleOpenUserMenu={handleOpenUserMenu}
                            handleCloseUserMenu={handleCloseUserMenu}
                            anchorElUser={anchorElUser}
                        />
                    )}
                    {!user && (
                        <Button
                            variant="contained"
                            color="primary"
                            component={RouterLink}
                            size="medium"
                            to="/auth?mode=login"
                            sx={{ marginLeft: '1rem' }}
                        >
                            Log in
                        </Button>
                    )}
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Navbar;
