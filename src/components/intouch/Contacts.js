import { Box, Typography, Divider } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import ContactsList from './ContactsList';

/**
 * Component made up of a box container and text elements that display the contacts in the form of a list of elements.
 * This element consists of three parts: a heading, a subtext, and a list of details.
 *
 */
const Contacts = () => {
    const theme = useTheme();
    return (
        <Box border={{ xs: '1px solid #aaa', md: 'none' }} p={2} sx={{ borderRadius: 2 }}>
            {/* HEADING */}
            <Typography mt={{ xs: 0, md: 1 }} variant={'h3'} component={'h3'} textAlign={{ xs: 'center', md: 'start' }}>
                Unde ne poti gasii ?
            </Typography>
            <Divider
                color={theme.palette.primary.main}
                sx={{
                    textAlign: 'center',
                    marginTop: '1rem',
                    marginBottom: '2rem',
                    height: '0.2rem',
                    maxWidth: { xs: '15%', md: '25%' },
                    ml: { xs: 'auto', md: '0' },
                    mr: { xs: 'auto', md: '0' },
                }}
            />
            {/* SUBTITLE TEXT */}
            <Typography
                variant={'body1'}
                component={'p'}
                sx={{ maxWidth: { xs: 'auto', md: '50ch' }, textAlign: { xs: 'center', md: 'justify' } }}
            >
                Mattis aliquam faucibus purus in massa tempor nec feugiat nisl pretium fusce id velit ut tortor pretium
                viverra aliquam faucibus purus in massa tempor ...
            </Typography>
            {/* LIST OF COTNACT DETAILS */}
            <ContactsList />
        </Box>
    );
};

export default Contacts;
