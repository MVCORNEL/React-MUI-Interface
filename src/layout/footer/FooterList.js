import { List, ListItem, Divider, Typography } from '@mui/material';
import FooterItem from './FooterItem';

/**
 * Represents the list of navigable links(pages) based on a a list of navigable items, first item of the list will be the heading
 *
 * @prop {string} title - heading title of the footer list
 * @prop {array} items - the list of navigable items (each item having an id,label and a key)
 */
const FooterList = ({ title, items }) => {
    return (
        <List>
            {/* HEADING */}
            <ListItem key={title}>
                <Typography ml={2} sx={{ fontSize: '2.1rem!important;' }}>
                    {title}
                </Typography>
            </ListItem>
            <Divider
                color="#ff3366"
                width="40%"
                sx={{
                    marginLeft: '3rem',
                    marginTop: '1rem',
                    marginBottom: '1rem',
                    height: '0.1rem',
                }}
            />
            {/* LIST */}
            {items.map((item) => {
                return <FooterItem key={item.id} label={item.label} url={item.url}></FooterItem>;
            })}
        </List>
    );
};
export default FooterList;
