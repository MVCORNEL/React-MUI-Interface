import { Container, Typography } from '@mui/material';
import GreyBox from '../../ui/GreyBox';
import TeamGrid from './TeamGrid';
import teamList from '../../consts/teamDetails';

/**
 * Component of the team topic section, each team member of which is represented in the responsive card's
 * details and which describes the service team as individual cards.
 *
 */
const TeamTopic = () => {
    return (
        <Container>
            {/* TEAM GRID */}
            <TeamGrid teamList={teamList} />
        </Container>
    );
};

export default TeamTopic;
