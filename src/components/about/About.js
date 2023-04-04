import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import Image from 'mui-image';
import SectionBox from '../../ui/SectionBox';
import AboutDetails from './AboutDetails';
import { about, quality } from './../../consts/aboutDetails';

/**
 * Fully responsive component for the "About" topic section, consisting of a grid with two rows,
 * each row representing the "About Section" elements and an image.
 *
 */
const About = () => {
    return (
        <SectionBox>
            <Grid container columnSpacing={5} rowSpacing={15}>
                {/* HEADING + TEXT */}
                <Grid xs={6}>
                    <AboutDetails title={about.title} details={about.details} />
                </Grid>
                {/* IMAGE */}
                <Grid xs={6}>
                    <Image src={about.image} alt="window image" fit="cover" duration={500} showLoading={true} easing="ease-in" height={'100%'} />
                </Grid>
                {/* IMAGE */}
                <Grid xs={6}>
                    <Image src={quality.image} alt="window image" fit="cover" duration={500} showLoading={true} easing="ease-in" height={'auto'} />
                </Grid>
                {/* HEADING + TEXT */}
                <Grid xs={6}>
                    <AboutDetails title={quality.title} details={quality.details} />
                </Grid>
            </Grid>
        </SectionBox>
    );
};

export default About;
