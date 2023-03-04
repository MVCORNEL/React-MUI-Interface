import { Container, Typography } from '@mui/material';
import GreyBox from '../../ui/GreyBox';
import FeatureList from './FeatureList';
import features from '../../consts/featureItems';

/**
 * Feature topic section component, consiting a heading, subtitle and a fully resposnive list of cards
 *
 */
const FeatureTopic = () => {
  return (
    <GreyBox>
      <Container>
        {/* HEADER */}
        <Typography variant="h2" component="h2" textAlign="center" mb={3}>
          Our high quality Services
        </Typography>
        {/* SUBTITLE */}
        <Typography
          mb={{ xs: 4, sm: 5, md: 10 }}
          variant="subtitle1"
          component="p"
          textAlign="center"
          sx={{ maxWidth: '60ch', marginRight: 'auto', marginLeft: 'auto' }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </Typography>
        {/* CARDS GRID */}
        <FeatureList featureList={features} />
      </Container>
    </GreyBox>
  );
};

export default FeatureTopic;
