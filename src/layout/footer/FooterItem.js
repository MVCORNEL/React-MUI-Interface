import { ListItemText, ListItem, ListItemButton } from '@mui/material';
import { NavLink as RouterLink } from 'react-router-dom';
/**
 * Component used to display each individual footer link
 * Each Item menu will be a NavLink behind the scene taht will provide the destination to a route using the MenuItem styles.
 *
 * @prop {number} id - id element that will be used to uniquely identify each element of menu list
 * @prop {string} label -  label describing the path destination
 * @prop {string} url - the page's path, which will be navigabile by presing link
 *
 */
const FooterItem = ({ label, url }) => {
    return (
        <ListItem key={label}>
            <ListItemButton>
                <ListItemText
                    component={RouterLink}
                    mb={0}
                    href={url}
                    sx={{
                        marginTop: 0,
                        marginBottom: 0,
                        color: '#bbbbbb',
                        transition: 'all 0.5s ease',

                        '&:hover': {
                            color: '#fff',
                            paddingLeft: '1px',
                        },
                    }}
                >
                    {label}
                </ListItemText>
            </ListItemButton>
        </ListItem>
    );
};

export default FooterItem;
