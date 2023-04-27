import { Stack, Button, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import SectionBox from '../../ui/SectionBox';
import SectionHeading from '../../ui/SectionHeading';
import ProductDetailsCardList from './productDetailsCardList';

/**
 * Products details topic section component, consiting a Subheading (title), a text content componenet,  and a fully responsive list of card images.
 */
const ProductDetailsTopic = () => {
    const theme = useTheme();
    return (
        <SectionBox>
            {/* HEADER */}
            <SectionHeading heading={'More details'}></SectionHeading>
            {/* DETAILS */}
            <Box>
                <Typography variant="body1" component="p" mb={3} textAlign={'justify'}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis massa vel odio tempus volutpat at eget urna. Morbi a metus pulvinar, condimentum tortor in, semper dui. Integer
                    non rutrum libero. Quisque nisi odio, sagittis eget faucibus a, dictum et nunc. Donec rutrum porta felis. Suspendisse sit amet ligula nisi. Mauris vel libero sodales velit rhoncus
                    faucibus sit amet in quam. Phasellus vel euismod augue.
                </Typography>

                <Typography variant="body1" component="p" mb={4} textAlign={'justify'}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis massa vel odio tempus volutpat at eget urna. Morbi a metus pulvinar, condimentum tortor in, semper dui. Integer
                    non rutrum libero. Quisque nisi odio, sagittis eget faucibus a, dictum et nunc. Donec rutrum porta felis. Suspendisse sit amet ligula nisi. Mauris vel libero sodales velit rhoncus
                    faucibus sit amet in quam. Phasellus vel euismod augue. Cras finibus, sem eget dapibus lacinia, velit nunc laoreet lacus, eu finibus magna tellus sed leo.
                </Typography>

                <Stack direction="row" justifyContent={'space-between'} alignContent={'center'} mb={1}>
                    <Typography variant="h3" component="h3">
                        Our work
                    </Typography>

                    {/* RECOVERY PASSWORD */}
                    <Button component={Link} to="?mode=forgot" sx={{ color: `${theme.palette.primary.main}` }}>
                        See all
                    </Button>
                </Stack>
                {/* 
                {LIST OF CARD */}
                <ProductDetailsCardList />
            </Box>
        </SectionBox>
    );
};

export default ProductDetailsTopic;
