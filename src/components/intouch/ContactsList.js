import { List } from '@mui/material';
import ContactItem from './ContactItem';
import list from '../../consts/contactDetails';

/**
 * Component bbased on a contact item list, represents a contact component list.
 * Iterates through an array @see list and builds the list items dynamically.
 *
 */
const ContactsList = () => {
    return (
        <List sx={{ marginTop: 1 }}>
            {list.map((info) => {
                return <ContactItem key={info.id} title={info.title} text={info.text} icon={info.icon} />;
            })}
        </List>
    );
};

export default ContactsList;
