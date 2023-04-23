import { ListItemIcon, ListItemButton, ListItemText, ListItem, Typography, SvgIcon } from '@mui/material';
import { NavLink as RouterLink } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import { useSearchParams } from 'react-router-dom';

/**
 * Component used to display each individual MenuItem which will be contained by the User Menu
 * Each Item menu will be a NavLink behind the scene that will provide the destination to a route using the ListItem default styles.
 *
 * @prop {number} id - id element that will be used to uniquely identify each element of menu list
 * @prop {string} icon -  icon representing each idividual List item
 * @prop {function} label - label describing the query parameter representing the path destination
 * @prop {string} link - the user's path, which will be navigabile by presing the ListItem component
 *
 */

const UserMenuItem = ({ id, icon, label, link }) => {
    const theme = useTheme();
    //establish if the the current link element is the selected one.
    const [searchParams] = useSearchParams();
    const isActive = searchParams.get('tab') === link;
    //function used to distinguish the current selectected link, from the others.
    const activeStyle = () =>
        isActive
            ? {
                  backgroundColor: theme.palette.primary.light,
                  boxShadow: '2px 2px 4px 2px rgba(0,0,0,0.3)',
              }
            : {};

    return (
        <ListItem
            key={id}
            component={RouterLink}
            to={`?tab=${link}`}
            style={activeStyle}
            sx={{
                mx: 'auto',
                '&:hover': {
                    backgroundColor: theme.palette.primary.light,
                },
            }}
        >
            <ListItemButton
                sx={{
                    justifyContent: 'initial',
                    p: 1.5,
                }}
            >
                <ListItemIcon
                    sx={{
                        minWidth: 0,
                        ml: 3,
                        mr: 3,
                        justifyContent: 'center',
                        color: '#FFFFFF',
                    }}
                >
                    <SvgIcon component={icon} sx={{ fontSize: '3rem', color: '#fff' }} />
                </ListItemIcon>

                <ListItemText
                    disableTypography
                    primary={
                        <Typography variant="body2" style={{ color: '#FFFFFF' }}>
                            {label}
                        </Typography>
                    }
                />
            </ListItemButton>
        </ListItem>
    );
};

export default UserMenuItem;
