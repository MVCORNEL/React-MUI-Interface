import { Container, Box, Typography, Stack } from '@mui/material';
import SubHeader from './ProductSubHeader';
import PropTypes from 'prop-types';
import ProductCrumbs from '../../../components/breadcrumbs/ProductCrumbs';
import backgroundImage from './../../../images/background-product.jpg';

/**
 * Represents a two parts responsive header component.
 * First part is represented by a container with a header and a box
 * Second part is represented by a grid of elements
 *@prop {string} title expects the title of the product
 */
const HeaderProduct = ({ title }) => {
    return (
        <Box sx={{ position: 'relative', backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', width: '100%', height: 'auto' }}>
            {/* BREADCRUMBS */}
            <Container sx={{ pt: 2 }}>
                <ProductCrumbs />
            </Container>

            <Container
                component="section"
                sx={{
                    paddingTop: { xxs: '5rem', sm: '5rem', md: '7rem', lg: '9rem' },
                    position: 'relative',
                }}
            >
                {/* HEADING */}
                <Box textAlign="center">
                    <Typography
                        variant="h1"
                        component="h1"
                        color="white"
                        backgroundColor="rgba(0,0,0,0.6)"
                        py={2}
                        px={6}
                        display={'inline-block'}
                        mb={{ xxs: '2rem', xs: '5rem', md: '9rem', lg: '17rem' }}
                    >
                        {title}
                    </Typography>
                </Box>

                <Box position={'relative'} sx={{ bottom: '-11rem', marginTop: '-11rem' }}>
                    <SubHeader />
                </Box>
            </Container>
        </Box>
    );
};

export default HeaderProduct;

HeaderProduct.propTypes = {
    title: PropTypes.string.isRequired,
};
