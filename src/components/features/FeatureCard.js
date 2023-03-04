import { Card, CardActions, CardContent } from '@mui/material';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import SvgIcon from '@mui/material/SvgIcon';

/**
 * Represents a card component that that display action and content of a single topic.
 * Each card consists on four elements (Icon,Title,Text,Button).
 *
 * @prop {component} children - the component that will be wrapped by the grey box.
 *
 */
const FeatureCard = ({ id, title, text, icon }) => {
  return (
    <Card
      key={id}
      sx={{
        boxShadow: 'none',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: { xs: 275, md: 350 },
      }}
    >
      <CardContent>
        {/* ICON */}
        <SvgIcon component={icon} sx={{ fontSize: '5rem', display: 'block', margin: '0 auto', color: '#333' }} />
        {/* TITLE */}
        <Typography variant="h3" component="h3" textAlign="center">
          {title}
        </Typography>
        {/* TEXT */}
        <Typography variant="body2" mt={2} textAlign="center">
          {text}
        </Typography>
      </CardContent>
      {/* BUTTON */}
      <CardActions sx={{ marginTop: 'auto', justifyContent: 'center' }}>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default FeatureCard;
