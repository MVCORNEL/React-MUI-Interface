import { Card, CardActions, CardContent, Avatar } from '@mui/material';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import SvgIcon from '@mui/material/SvgIcon';

/**
 * Represents a team card component that shows each individual card's content.
 * Each card consists on four elements (key,name,title,text,image).
 *
 * @prop {string || number} id - key element required for each distinct element in a react list environment
 * @prop {string} name - name of the card
 * @prop {string} title - title of the card (holder position)
 * @prop {string} text - text description of the card
 * @prop {url} image - url to image
 */
const TeamCard = ({ id, name, title, text, image }) => {
    return (
        <Card
            key={id}
            sx={{
                boxShadow: 'none',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                maxWidth: { xs: '360px', sm: '540px', md: '360px', lg: '330px', xl: '360px' },
                borderRadius: 0,
            }}
        >
            <CardContent>
                {/* ICON */}
                <Avatar src={image} alt={name} sx={{ width: 240, height: 240, marginLeft: 'auto', marginRight: 'auto', marginTop: '1.2rem' }} />
                {/* NAME */}
                <Typography variant="cardTitle" component="h3" textAlign="center" mt="3rem">
                    {name.toUpperCase()}
                </Typography>
                {/* TITLE */}
                <Typography variant="cardSubTitle" component="h3" textAlign="center">
                    {title.toLowerCase()}
                </Typography>
                {/* TEXT */}
                <Typography variant="body1" component="p" mt={2} textAlign="center" sx={{ fontStyle: 'italic' }}>
                    {text}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default TeamCard;
