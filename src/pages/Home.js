import Header from '../components/Header';
import FeatureTopic from '../components/features/FeatureTopic';
import ServiceTopic from '../components/services/ServiceTopic';
import { services, products } from '../consts/serviceitems';

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
    </div>
  );
};

export default Home;
