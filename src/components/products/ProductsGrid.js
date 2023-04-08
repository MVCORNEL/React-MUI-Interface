import Grid from '@mui/material/Unstable_Grid2/Grid2';
import ProductCard from './ProductCard';

/**
 * Represents a grid of product cards based on a fluid grid layout element (fully responsive).
 * This component will dynamically create a grid of card elements @requires
 *
 * @prop {array} productsList - expects a list of object
 */
const ProductsGrid = ({ productsList }) => {
    return (
        <Grid container spacing={4} rowSpacing={{ xxs: 2, xs: 3, md: 5, lg: 8 }}>
            {productsList.map((product) => {
                return (
                    <Grid xxs={12} sm={6} md={4} key={product.id}>
                        <ProductCard type={product.type} text={product.text} image={product.img} />
                    </Grid>
                );
            })}
        </Grid>
    );
};

export default ProductsGrid;
