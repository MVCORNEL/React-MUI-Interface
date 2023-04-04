import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import FeatureCard from './FeatureCard';

/**
 * Represents a list of Feature cards based on a fluid grid layout element (fully responsive).
 *
 * @prop {array} featureList - expects a list of object
 */
const FeatureList = ({ featureList }) => {
    return (
        <Grid container rowSpacing={{ xs: 2, sm: 3, md: 5 }} columnSpacing={{ xs: 2, sm: 2, md: 5, lg: 5 }} justifyContent="center">
            {featureList.map((feature) => {
                return (
                    <Grid key={feature.id} xs={12} sm={6} lg={4}>
                        <FeatureCard id={feature.id} title={feature.title} text={feature.text} icon={feature.icon} />
                    </Grid>
                );
            })}
        </Grid>
    );
};

export default FeatureList;
