import { Stack, Button, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import SectionBox from '../../ui/SectionBox';
import ProductDetailsCardList from './productDetailsCardList';

/**
 * Products details topic section component, consiting a Subheading (title), a text content componenet,  and a fully responsive list of card images.
 */
const ProductDetailsTopic = () => {
    return (
        <SectionBox>
            <Typography variant="h2" component="h2" mb={6} mt={-1}>
                What can I find about the service !
            </Typography>

            <Typography variant="body1" component="p" mb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis massa vel odio tempus volutpat at eget urna. Morbi a metus pulvinar, condimentum tortor in, semper dui. Integer non
                rutrum libero. Quisque nisi odio, sagittis eget faucibus a, dictum et nunc. Donec rutrum porta felis. Suspendisse sit amet ligula nisi. Mauris vel libero sodales velit rhoncus faucibus
                sit amet in quam. Phasellus vel euismod augue. Cras finibus, sem eget dapibus lacinia, velit nunc laoreet lacus, eu finibus magna tellus sed leo.
            </Typography>

            <Typography variant="body1" component="p" mb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis massa vel odio tempus volutpat at eget urna. Morbi a metus pulvinar, condimentum tortor in, semper dui. Integer non
                rutrum libero. Quisque nisi odio, sagittis eget faucibus a, dictum et nunc. Donec rutrum porta felis. Suspendisse sit amet ligula nisi. Mauris vel libero sodales velit rhoncus faucibus
                sit amet in quam. Phasellus vel euismod augue. Cras finibus, sem eget dapibus lacinia, velit nunc laoreet lacus, eu finibus magna tellus sed leo.
            </Typography>
            {/*LIST OF CARD */}

            <Typography variant="h3" component="h3" mb={3}>
                Some of our work
            </Typography>
            <ProductDetailsCardList />

            <Box textAlign={'center'}>
                <Button component={Link} to="?mode=forgot" variant="outlined" sx={{ marginTop: '5rem', marginLeft: 'auto' }}>
                    See more
                </Button>
            </Box>
        </SectionBox>
    );
};

export default ProductDetailsTopic;
