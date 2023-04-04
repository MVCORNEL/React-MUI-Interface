import { Fragment } from 'react';
import Header from '../layout/header/Header';
import FeatureTopic from '../components/features/FeatureTopic';
import ServiceTopic from '../components/services/ServiceTopic';
import { services, curving } from '../consts/serviceitems';
import GalleryTopic from '../components/gallery/GalleryTopic';
import GetInTouchTopic from '../components/intouch/GetInTouchTopic';

/**
 * Homepage component
 */
const Home = () => {
    return (
        <Fragment>
            <Header />
            <FeatureTopic />
            <ServiceTopic isPlacedRight={true} {...services} />
            <ServiceTopic {...curving} />

            <GalleryTopic />
            <GetInTouchTopic />
        </Fragment>
    );
};

export default Home;
