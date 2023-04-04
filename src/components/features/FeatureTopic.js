import { Box } from '@mui/material';
import SectionBox from '../../ui/SectionBox';
import SectionHeading from '../../ui/SectionHeading';
import FeatureList from './FeatureList';
import features from '../../consts/featureItems';

/**
 * Feature topic section component, consiting a Subheading (title,subtitle) and a fully responsive list of feature cards
 *
 */
const FeatureTopic = () => {
    return (
        <SectionBox isGray={true}>
            <Box>
                {/*SECTION  HEADING */}
                <SectionHeading
                    heading="Our high quality Features"
                    subheading="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
                {/* CARDS GRID */}
                <FeatureList featureList={features} />
            </Box>
        </SectionBox>
    );
};

export default FeatureTopic;
