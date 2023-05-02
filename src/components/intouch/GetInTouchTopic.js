import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import SectionBox from '../../ui/SectionBox';
import SectionHeading from '../../ui/SectionHeading';
import GetInTouchForm from './../../forms/GetInTouchForm';
import Contacts from './Contacts';

/**
 * Component section used to list contact information and offer a way to get in touch with business representatives.
 * Consists in a SectionHeading element (title,subtitle) and has 2 sections :
 * The left side consists of a text container with text elements where the business's contact details are shown,
 * and the other side is a straightforward form with fields for an email address, a phone number,
 * The section is entirely responsive thanks to Mui Grid and break points.
 *
 */
const GetInTouchTopic = () => {
    return (
        <SectionBox>
            {/*SECTION  HEADING */}
            <SectionHeading heading="Get in Touch" subheading=" Mattis aliquam faucibus purus in massa tempor nec feugiat nisl pretium fusce id velit ut tortor pretium viverra ." />
            <Grid container spacing={{ xxs: 2, md: 4 }} id="contact">
                {/*CONTACTS */}
                <Grid xxs={12} md={6}>
                    <Contacts />
                </Grid>
                {/*CONTACT FORM*/}
                <Grid xxs={12} md={6}>
                    <GetInTouchForm />
                </Grid>
            </Grid>
        </SectionBox>
    );
};

export default GetInTouchTopic;
