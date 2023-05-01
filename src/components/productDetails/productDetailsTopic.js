import { Button, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import SectionBox from '../../ui/SectionBox';
import ProductDetailsCardList from './productDetailsCardList';
import PropTypes from 'prop-types';

/**
 * Products details topic section component, consiting a Subheading (title), a text content componenet,  and a fully responsive list of card images.
 * @prop {string} summary sort summary of the product
 * @prop {string} description larger description of the product
 */
const ProductDetailsTopic = ({ description, summary }) => {
    return (
        <SectionBox isGray={true}>
            <Box mt={{ xxs: '12rem', sm: '11rem', md: '12rem', lg: '13rem' }} />
            <Typography variant="h2" component="h2" mb={6} mt={-1}>
                What can I find about the service !
            </Typography>

            <Typography variant="body1" component="p" mb={4}>
                {summary}
            </Typography>

            <Typography variant="body1" component="p" mb={4}>
                {description}
            </Typography>
            {/*LIST OF CARD */}

            <Typography variant="h3" component="h3" mb={3}>
                Some of our work
            </Typography>
            <ProductDetailsCardList />

            <Box textAlign={'center'}>
                <Button component={Link} to="/portofolio" variant="outlined" sx={{ marginTop: '5rem', marginLeft: 'auto' }}>
                    See more
                </Button>
            </Box>
        </SectionBox>
    );
};

export default ProductDetailsTopic;

ProductDetailsTopic.propTypes = {
    summary: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};
