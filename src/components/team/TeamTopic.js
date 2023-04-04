import SectionBox from '../../ui/SectionBox';
import TeamGrid from './TeamGrid';
import teamList from '../../consts/teamDetails';

/**
 * Component of the team topic section, each team member of which is represented in the responsive card's
 * details and which describes the service team as individual cards.
 *
 */
const TeamTopic = () => {
    return (
        <SectionBox>
            {/* TEAM GRID */}
            <TeamGrid teamList={teamList} />
        </SectionBox>
    );
};

export default TeamTopic;
