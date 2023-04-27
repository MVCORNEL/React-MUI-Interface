import { Stack } from '@mui/material';
import ProductDetailsCardItem from './productDetailsCardItem';

/**
 * Represents a list of  cards based on a fluid flex layout element (fully responsive).
 * This component will dynamically create a list of card elements @requires ProductDetailsCardItem
 *
 */
const ProductDetailsCardList = () => {
    return (
        <Stack direction={{ xxs: 'column', sm: 'row' }} spacing={2} justifyContent={'space-between'} alignItems={'center'}>
            <ProductDetailsCardItem />
            <ProductDetailsCardItem />
            <ProductDetailsCardItem />
        </Stack>
    );
};

export default ProductDetailsCardList;
