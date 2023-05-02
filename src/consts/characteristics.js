import { ReactComponent as InsulationSvg } from './../icons/insulation.svg';
import { ReactComponent as NatureSvg } from './../icons/nature.svg';
import { ReactComponent as LocktSvg } from './../icons/lock.svg';
import { ReactComponent as GuaranteeSvg } from './../icons/guarantee.svg';

const characteristics = [
    {
        id: 1,
        title: 'Thermal insulation',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        icon: <InsulationSvg />,
    },
    {
        id: 2,
        title: 'INTRETINERE USOARA',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
        icon: <NatureSvg />,
    },
    {
        id: 3,
        title: 'SIGURANTA MARITA',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        icon: <LocktSvg />,
    },
    {
        id: 4,
        title: 'Long warranty',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
        icon: <GuaranteeSvg />,
    },
];

export default characteristics;
