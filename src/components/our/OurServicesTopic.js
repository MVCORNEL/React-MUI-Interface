import { Box } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import SectionBox from '../../ui/SectionBox';
import SectionHeading from '../../ui/SectionHeading';
import Image from 'mui-image';
import image from './../../images/service0.jpg';
import OurServiceList from './OurServiceList';
import ourServices from '../../consts/ourServices';
/**
 * Our services topic section component, consiting a Subheading (title,subtitle) , a list of services and a side image
 *
 */
const OurServicesTopic = () => {
    return (
        <SectionBox>
            <Box>
                {/*SECTION  HEADING */}
                <SectionHeading heading="Our Services" subheading="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
            </Box>

            <Grid container spacing={4}>
                <Grid xs={12} md={8}>
                    {/*SERVICE  LIST */}
                    <OurServiceList services={ourServices} />
                </Grid>
                <Grid xs={12} md={4}>
                    <Image src={image} alt="window image" fit="cover" duration={3000} showLoading={true} easing="ease-in" />
                </Grid>
            </Grid>
        </SectionBox>
    );
};

export default OurServicesTopic;
