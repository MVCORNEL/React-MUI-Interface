import { Card, CardContent, CardMedia, Typography, CardActions, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

/**
 * Represents a card component that that display content of a product card element.
 * Each card consists on four elements (Icon,Title,Text,Button).
 *
 * @prop {string || number} id - key element required for each distinct element in a react list environment
 * @prop {string} name - title of the card
 * @prop {string} summary - text content of the card
 * @prop {string} imgUrl - url to image
 */
const ProductCard = ({ id, name, summary, imgUrl, slug }) => {
    return (
        <Card
            key={id}
            sx={{
                paddingBottom: { xxs: '1rem', md: '1rem' },
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                marginLeft: 'auto',
                marginRight: 'auto',
                maxWidth: { xxs: 280, sm: 300, md: 350 },
                backgroundColor: 'rgba(0, 0, 0, .01)',
                boxShadow: '0 6px 20px 0 rgba(0, 0, 0, 0.19)',
            }}
        >
            <CardMedia>
                {/* ICON */}
                <CardMedia component={'img'} sx={{ height: { xxs: 175, xs: 200, sm: 225, md: 250 }, objectFit: 'fill' }} src={imgUrl} alt={name} />
                <Typography variant="h3" p={0.5} component="h3" color="white" textAlign={'center'} sx={{ backgroundColor: 'rgb(255,87,34, 0.9)' }}>
                    {name}
                </Typography>
            </CardMedia>
            <CardContent>
                {/* TEXT */}
                <Typography variant="body2" component="p" mt={2} textAlign={'justify'}>
                    {summary}
                </Typography>
            </CardContent>
            <CardActions sx={{ direction: 'column', justifyContent: 'center!important', marginTop: 'auto' }}>
                <Button component={Link} size="small" to={`/product/${slug}`}>
                    Learn more
                </Button>
            </CardActions>
        </Card>
    );
};

export default ProductCard;

ProductCard.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
};
