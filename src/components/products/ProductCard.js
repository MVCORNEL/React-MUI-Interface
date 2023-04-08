import { Card, CardContent, CardMedia, Typography } from '@mui/material';

/**
 * Represents a card component that that display content of a product card element.
 * Each card consists on four elements (Icon,Title,Text,Button).
 *
 * @prop {string || number} id - key element required for each distinct element in a react list environment
 * @prop {string} type - title of the card
 * @prop {string} text - text content of the card
 * @prop {url} image - url to image
 */
const ProductCard = ({ id, type, text, image }) => {
    return (
        <Card
            key={id}
            sx={{
                paddingBottom: { xxs: '2rem', md: '2rem' },
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
                <CardMedia component={'img'} sx={{ height: { xxs: 175, xs: 200, sm: 225, md: 250 }, objectFit: 'fill' }} src={image} alt={type} />
                <Typography variant="h3" p={1} component="h3" color="white" textAlign={'center'} sx={{ backgroundColor: 'rgb(255,87,34, 0.9)' }}>
                    {type}
                </Typography>
            </CardMedia>
            <CardContent>
                {/* TEXT */}
                <Typography variant="body2" component="p" mt={2} textAlign={'justify'}>
                    {text}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default ProductCard;
