import { ReactComponent as InsulationSvg } from './../icons/insulation.svg';
import { ReactComponent as NatureSvg } from './../icons/nature.svg';
import { ReactComponent as LocktSvg } from './../icons/lock.svg';
import { ReactComponent as GuaranteeSvg } from './../icons/guarantee.svg';

const characteristics = [
    {
        id: 1,
        title: 'Izolare termica',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        icon: <InsulationSvg />,
    },
    {
        id: 2,
        title: 'Intretinere usoara',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
        icon: <NatureSvg />,
    },
    {
        id: 3,
        title: 'Siguranta marita',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        icon: <LocktSvg />,
    },
    {
        id: 4,
        title: 'Garantie indelungata',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
        icon: <GuaranteeSvg />,
    },
];

export default characteristics;
