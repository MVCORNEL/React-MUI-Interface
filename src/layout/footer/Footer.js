import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import { Typography, Box, Container } from '@mui/material';
import FooterLogo from './FooterLogo';
import Divider from '@mui/material/Divider';
import FooterList from './FooterList';
import { navigationList } from '../../consts/footerItems';
import { privacyList } from '../../consts/footerItems';

/**
 * Represents the responsive application footer component. The footer contains 3 section.
 * First one Logo plus text, second navigable links,while the last section ti is represented by the Copyright.
 *
 */
const Footer = () => {
  return (
    <Box component="footer" sx={{ backgroundColor: '#24262b', color: 'white' }}>
      <Container maxWidth="lg">
        <Grid container maxWidth="lg" direction="row" justifyContent="space-between" alignItems="baseline">
          <Grid xs={12} md={5} p={4}>
            {/* LOGO */}
            <FooterLogo />
            {/* TEXT */}
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam.
            </Typography>
          </Grid>
          {/* PRIVACY */}
          <Grid xs={12} md={5} container justifyContent={'space-between'}>
            <FooterList title={privacyList.title} items={privacyList.items} />
            <FooterList title={navigationList.title} items={navigationList.items} />
          </Grid>
          {/* NAVIGATION */}
        </Grid>
      </Container>

      {/* COPYRIGHT */}
      <Box sx={{ textAlign: 'center' }}>
        <Container maxWidth="lg">
          <Divider color="#aaa" />
          <Typography variant="subtitle1" color="white" p={2}>
            Copyright @2023. All rights reserved
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
