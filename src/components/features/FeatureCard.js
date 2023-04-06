import { Card, CardContent, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import IconWrapper from '../../ui/IconWrapper';

/**
 * Represents a card component that that display action and content of a single topic.
 * Each card consists on four elements (Icon,Title,Text,Button).
 *
 * @prop {string || number} id - key element required for each distinct element in a react list environment
 * @prop {string} title - title of the card
 * @prop {string} text - text content of the card
 * @prop {url} icon - url to image
 */
const FeatureCard = ({ id, title, text, icon }) => {
    const theme = useTheme();
    //All devices smaller than 900px
    const isSmallDevice = useMediaQuery(theme.breakpoints.down('sm'));
    //All devices smaller that 600px
    const isVerySmallDevice = useMediaQuery(theme.breakpoints.down('xs'));

    const iconSize = isVerySmallDevice ? '7rem' : isSmallDevice ? '8rem' : '9rem';
    return (
        <Card
            key={id}
            sx={{
                paddingTop: { xxs: '2rem', md: '3rem' },
                paddingBottom: { xxs: '3rem', md: '4rem' },
                paddingRight: { xxs: '1rem', md: '2rem' },
                paddingLeft: { xxs: '1rem', md: '2rem' },
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                marginLeft: 'auto',
                marginRight: 'auto',
                maxWidth: { xxs: 325, md: 425 },
            }}
        >
            <CardContent>
                {/* ICON */}
                <IconWrapper size={iconSize} marginBottom="2rem" color={theme.palette.primary.main}>
                    {icon}
                </IconWrapper>
                {/* TITLE */}
                <Typography variant="h3" component="h3" textAlign="center">
                    {title?.toUpperCase()}
                </Typography>
                {/* TEXT */}
                <Typography variant="body1" component="p" mt={2} textAlign="center">
                    {text}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default FeatureCard;
