import Header from '../layout/header/Header';
import FeatureTopic from '../components/features/FeatureTopic';
import ServiceTopic from '../components/services/ServiceTopic';
import { services, products } from '../consts/serviceitems';
import GalleryTopic from '../components/gallery/GalleryTopic';
import GetInTouchTopic from '../components/intouch/GetInTouchTopic';

/**
 * Homepage component
 */
const Home = () => {
    return (
        <div>
            <Header />
            <FeatureTopic />
            <ServiceTopic isPlacedRight={true} {...services} />
            <ServiceTopic {...products} />
            <GalleryTopic />
            <GetInTouchTopic />
        </div>
    );
};

export default Home;
