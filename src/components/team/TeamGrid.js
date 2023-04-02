import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import TeamCard from './TeamCard';
import { Box } from '@mui/system';
/**
 * Based on a fluid grid layout element, represents a list of Team cards. (fully responsive).
 *
 * @prop {array} featureList - expects a list of object containing th details of each Team card.
 */
const TeamGrid = ({ teamList }) => {
    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px' }}>
            {teamList.map((teamMember) => {
                return (
                    <Box key={teamMember.id}>
                        <TeamCard id={teamMember.id} name={teamMember.name} title={teamMember.title} text={teamMember.text} image={teamMember.image} />
                    </Box>
                );
            })}
        </Box>
    );
};

export default TeamGrid;
