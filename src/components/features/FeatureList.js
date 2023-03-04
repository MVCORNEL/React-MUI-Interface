import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import FeatureCard from './FeatureCard';

/**
 * Represents a list of Feature cards based on a fluid grid layout element (fully responsive).
 *
 * @prop {array} featureList - expects a list of object
 */
const FeatureList = ({ featureList }) => {
  return (
    <Grid container spacing={3} sx={{ justifyContent: 'space-around' }}>
      {featureList.map((feature) => {
        return (
          <Grid key={feature.id} xs={12} sm={6} lg={3}>
            <FeatureCard id={feature.id} title={feature.title} text={feature.text} icon={feature.icon} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default FeatureList;
