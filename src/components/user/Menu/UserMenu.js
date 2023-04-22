import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import profileSettings from '../../../consts/profileSettings';
import UserMenuItem from './UserMenuItem';
import { useTheme } from '@mui/material/styles';
import { useSearchParams } from 'react-router-dom';
/**
 * Represents a simple menu, with a list of navigable links, represented as a @component {UserMenuItem}
 * Each menu item represents a link to a page.
 *
 */
export default function UserMenu({ children }) {
    const theme = useTheme();
    return (
        <Box sx={{ backgroundImage: `linear-gradient(to right, ${theme.palette.primary.light} , ${theme.palette.primary.dark})`, minHeight: { xs: 'auto', md: '55rem' }, padding: 3 }}>
            <List sx={{ width: { md: 280 } }}>
                {profileSettings.map((item) => {
                    return <UserMenuItem key={item.id} label={item.label} icon={item.icon} link={item.link}></UserMenuItem>;
                })}
            </List>
        </Box>
    );
}
