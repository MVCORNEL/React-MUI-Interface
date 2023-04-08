import Grid from '@mui/material/Unstable_Grid2/Grid2';
import SectionBox from '../../ui/SectionBox';
import SectionHeading from '../../ui/SectionHeading';
import products from '../../consts/productItems';
import ProductsGrid from './ProductsGrid';

/**
 * Products topic section component, consiting a Subheading (title,subtitle) and a fully responsive list of product cards
 *
 */
const ProductsTopic = () => {
    return (
        <SectionBox isGray={true}>
            <SectionHeading heading={'Produsele nostre'} subheading={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'} />
            <ProductsGrid productsList={products} />;
        </SectionBox>
    );
};

export default ProductsTopic;
