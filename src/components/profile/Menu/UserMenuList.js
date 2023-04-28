import * as React from 'react';
import List from '@mui/material/List';
import UserMenuItem from './UserMenuItem';

/**
 * Represents a list of  links based on a simple MUI list element (fully responsive).
 * This component will dynamically create a list of card elements @requires ProductDetailsCardItem
 *
 * @prop {array} list - expects a list of object
 */
const UserMenuList = ({ list }) => {
    return (
        <List>
            {list.map((item) => {
                return <UserMenuItem key={item.id} label={item.label} icon={item.icon} link={item.link}></UserMenuItem>;
            })}
        </List>
    );
};

export default UserMenuList;
