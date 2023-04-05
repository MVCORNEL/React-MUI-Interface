import { List } from '@mui/material';
import HeaderCardItem from './HeaderCardItem';

/**
 * Represents a list of feature cahracteristics elements (fully responsive).
 *
 * @prop {array} characteristics - expects a list of object
 */
const HeaderCardList = ({ characteristics }) => {
    return (
        <List>
            {characteristics.map((property) => {
                return <HeaderCardItem key={property.id} icon={property.icon} title={property.title} text={property.text} />;
            })}
        </List>
    );
};

export default HeaderCardList;
