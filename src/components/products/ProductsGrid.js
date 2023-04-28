import Grid from '@mui/material/Unstable_Grid2/Grid2';
import ProductCard from './ProductCard';

/**
 * Represents a grid of product cards based on a fluid grid layout element (fully responsive).
 * This component will dynamically create a grid of card elements @requires productsList
 *
 * @prop {array} productsList - expects a list of object
 */
const ProductsGrid = ({ productList }) => {
    return (
        <Grid container spacing={4} rowSpacing={{ xxs: 2, xs: 3, md: 5, lg: 8 }}>
            {productList.map((product) => {
                return (
                    <Grid xxs={12} sm={6} md={4} key={product.id}>
                        <ProductCard id={product.id} name={product.name} summary={product.summary} imgUrl={product.imgUrl} />
                    </Grid>
                );
            })}
        </Grid>
    );
};

export default ProductsGrid;
