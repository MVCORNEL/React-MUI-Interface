import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import StarBorderPurple500OutlinedIcon from '@mui/icons-material/StarBorderPurple500Outlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';

const profileSettings = [
    {
        id: 'me',
        label: 'About me',
        icon: SettingsOutlinedIcon,
        link: 'me',
    },
    {
        id: 'askus',
        label: 'Ask Us',
        icon: MessageOutlinedIcon,
        link: 'ask',
    },
    {
        id: 'reviews',
        label: 'Reviews',
        icon: StarBorderPurple500OutlinedIcon,
        link: 'reviews',
    },
    ,
    {
        id: 'theme',
        label: 'Theme',
        icon: SettingsOutlinedIcon,
        link: 'theme',
    },
];

export default profileSettings;
