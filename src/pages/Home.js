import { Fragment } from 'react';
import Header from '../layout/header/Header';
import FeatureTopic from '../components/features/FeatureTopic';
import GalleryTopic from '../components/gallery/GalleryTopic';
import GetInTouchTopic from '../components/intouch/GetInTouchTopic';
import OurServicesTopic from '../components/our/OurServicesTopic';

/**
 * Homepage component
 */
const Home = () => {
    return (
        <Fragment>
            <Header />
            <FeatureTopic />
            <OurServicesTopic />
            <GalleryTopic />
            <GetInTouchTopic />
        </Fragment>
    );
};

export default Home;
