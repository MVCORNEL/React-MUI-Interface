import { CardActionArea, Typography, CardMedia, CardContent, Card, Box } from '@mui/material';
import PropTypes from 'prop-types';
/**
 * Represents a card component that that display content of a product details card element.
 * Each card consists on four elements (Image,Title,Text).
 *
 * @prop {string} title - title of the card
 * @prop {string} text - text of the card
 * @prop {string} image - url to image
 */
const ProductDetailsCardItem = ({ title, image, text }) => {
    return (
        <Card sx={{ maxWidth: 350, borderRadius: 0, boxShadow: 'none' }}>
            <CardActionArea sx={{ margin: '0', padding: '0' }}>
                <CardMedia component="img" height="280" image={image} alt={title} />
                <CardContent sx={{ paddingLeft: 2, paddingRight: 2, paddingTop: 3, paddingBottom: 3 }}>
                    <Typography gutterBottom variant="subtitle1" component="h3">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {text}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default ProductDetailsCardItem;

ProductDetailsCardItem.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
};
