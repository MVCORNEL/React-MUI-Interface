import { Container, Typography } from '@mui/material';

/**
 * Represents a  header component.
 *
 */
const HeaderGallery = () => {
    return (
        <Container
            component="section"
            sx={{
                marginTop: { xxs: '4rem', sm: '5rem', md: '7rem', lg: '9rem' },
            }}
        >
            {/* HEADING */}
            <Typography variant="h1" component="h1" textAlign="center">
                Welcome to our Gallery !
            </Typography>
        </Container>
    );
};

export default HeaderGallery;
