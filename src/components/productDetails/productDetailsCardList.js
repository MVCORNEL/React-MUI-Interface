import { Stack } from '@mui/material';
import ProductDetailsCardItem from './productDetailsCardItem';
import productCardsItems from './../../consts/productsCardItem';
/**
 * Represents a list of  cards based on a fluid flex layout element (fully responsive).
 * This component will dynamically create a list of card elements @requires ProductDetailsCardItem
 *
 */
const ProductDetailsCardList = () => {
    return (
        <Stack direction={{ xxs: 'column', sm: 'row' }} spacing={2} justifyContent={'space-between'} alignItems={'center'}>
            {productCardsItems.map((item, id) => {
                return <ProductDetailsCardItem key={id} title={item.title} image={item.image} text={item.text} />;
            })}
        </Stack>
    );
};

export default ProductDetailsCardList;
