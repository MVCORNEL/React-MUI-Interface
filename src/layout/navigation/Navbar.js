import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
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
    const isAuth = useSelector((state) => state.auth.isAuthentificated);

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
                    <NavLogo display={{ xs: 'none', md: 'flex' }} variant="h5" flexGrow={0} />
                    {/* HAMBURGER MENU */}
                    <NavBurgerMenu handleCloseNavMenu={handleCloseNavMenu} handleOpenNavMenu={handleOpenNavMenu} anchorElNav={anchorElNav} />
                    {/* LOGO MIDDLE */}
                    <NavLogo display={{ xs: 'flex', md: 'none' }} variant="h6" flexGrow={1} />
                    {/* LINKS */}
                    <NavLinks handleCloseNavMenu={handleCloseNavMenu} />
                    {/* PROFILE BOX */}
                    {isAuth && <NavProfileBox handleOpenUserMenu={handleOpenUserMenu} handleCloseUserMenu={handleCloseUserMenu} anchorElUser={anchorElUser} />}
                    {!isAuth && (
                        <Button variant="contained" color="primary" component={RouterLink} size="large" to="/auth?mode=login" sx={{ marginLeft: '1rem' }}>
                            Log in
                        </Button>
                    )}
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Navbar;
