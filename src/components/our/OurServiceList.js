import { List } from '@mui/material';
import OurServiceItem from './OurServiceItem';

/**
 * Represents a list of services cards based on a fluid grid layout element (fully responsive).
 *
 * @prop {array} services - expects a list of service objects
 */
const OurServiceList = ({ services }) => {
    return (
        <List>
            {services.map((service) => {
                return <OurServiceItem key={service.id} title={service.title} text={service.text} icon={service.icon} />;
            })}
        </List>
    );
};

export default OurServiceList;
