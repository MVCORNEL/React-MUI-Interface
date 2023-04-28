import * as React from 'react';
import Box from '@mui/material/Box';
import userSettings from '../../../consts/profileSettings';
import adminSettings from '../../../consts/adminSettings';
import { useTheme } from '@mui/material/styles';
import { Divider } from '@mui/material';
import UserMenuList from './UserMenuList';

/**
 * Represents a simple menu, with a list of navigable links, represented as a @component {UserMenuItem}
 * Each menu item represents a link to a page.
 *
 */
export default function UserMenu() {
    const theme = useTheme();

    return (
        <Box sx={{ backgroundImage: `linear-gradient(to right, ${theme.palette.primary.light} , ${theme.palette.primary.dark})`, minHeight: { xs: 'auto' }, padding: 3 }}>
            {/* USERS */}
            <UserMenuList list={userSettings} />
            {/* ADMIN */}
            <Divider style={{ background: 'white' }} variant="middle" />
            <UserMenuList list={adminSettings} />
        </Box>
    );
}
