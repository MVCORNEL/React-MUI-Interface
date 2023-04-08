import { Card, CardContent, Avatar } from '@mui/material';
import Typography from '@mui/material/Typography';

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
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                maxWidth: { xxs: '360px', xl: '360px' },
                borderRadius: 0,
                padding: { xxs: '0.5rem', xs: '1rem' },
            }}
        >
            <CardContent>
                {/* ICON */}
                <Avatar src={image} alt={name} sx={{ width: { xxs: 180, xs: 200, md: 240 }, height: { xxs: 180, xs: 200, md: 240 }, marginLeft: 'auto', marginRight: 'auto' }} />
                {/* NAME */}
                <Typography variant="h3" component="h2" textAlign="center" mt="3rem">
                    {name.toUpperCase()}
                </Typography>
                {/* TITLE */}
                <Typography variant="cardSubTitle" component="p" textAlign="center" mt="0.5rem">
                    {title.toLowerCase()}
                </Typography>
                {/* TEXT */}
                <Typography variant="body2" component="p" mt={2} textAlign="center" sx={{ fontStyle: 'italic', color: '#777' }}>
                    {text}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default TeamCard;
