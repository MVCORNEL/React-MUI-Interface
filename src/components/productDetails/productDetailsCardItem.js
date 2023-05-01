import { CardActionArea, Typography, CardMedia, CardContent, Card, Box } from '@mui/material';
import img from './../../images/gallery1.jpg';

/**
 * Represents a card component that that display content of a product details card element.
 * Each card consists on four elements (Image,Title,Text).
 *
 * @prop {string} title - title of the card
 * @prop {string} imgUrl - url to image
 */
const ProductDetailsCardItem = ({ title, imgUrl }) => {
    return (
        <Card sx={{ maxWidth: 350, borderRadius: 0, boxShadow: 'none' }}>
            <CardActionArea sx={{ margin: '0', padding: '0' }}>
                <CardMedia component="img" height="280" image={img} alt={title} />
                <CardContent sx={{ paddingLeft: 2, paddingRight: 2, paddingTop: 3, paddingBottom: 3 }}>
                    <Typography gutterBottom variant="subtitle1" component="h3">
                        Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default ProductDetailsCardItem;
