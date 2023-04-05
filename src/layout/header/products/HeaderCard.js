import { Card, CardContent, Typography } from '@mui/material';
import HeaderCardList from './HeaderCardList';
import characteristics from '../../../consts/characteristics';

/**
 * Represents a fully-responsive Card component, containing a heading and a list of feature elements
 *
 */
const HeaderCard = () => {
    return (
        <Card sx={{ minWidth: 275, boxShadow: ' 6px 6px 6px 5px rgba(0,0,0,0.2)' }}>
            <CardContent sx={{ padding: 2 }}>
                {/* HEADING */}
                <Typography variant="h3" component="h2" mt={2} ml={3} mb={1}>
                    Caracteristici produse
                </Typography>
                {/* Feature LIST */}
                <HeaderCardList characteristics={characteristics} />
            </CardContent>
        </Card>
    );
};

export default HeaderCard;
