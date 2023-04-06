import { ReactComponent as IstallSvg } from './../icons/install.svg';
import { ReactComponent as ProductionSvg } from './../icons/doubleglazed.svg';
import { ReactComponent as TransportSvg } from './../icons/transport.svg';
import { ReactComponent as RepairSvg } from './../icons/repair.svg';
import { ReactComponent as CounselingSvg } from './../icons/counseling.svg';
import { ReactComponent as Guarantee } from './../icons/guarantee.svg';

const features = [
    {
        id: 1,
        title: 'Montaj',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        icon: <IstallSvg />,
    },
    {
        id: 2,
        title: 'Productie',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
        icon: <ProductionSvg />,
    },
    {
        id: 3,
        title: 'Transport',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        icon: <TransportSvg />,
    },
    {
        id: 4,
        title: 'Reparatii',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
        icon: <RepairSvg />,
    },
    {
        id: 5,
        title: 'Consiliere',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
        icon: <CounselingSvg />,
    },
    {
        id: 6,
        title: 'Garantie',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
        icon: <Guarantee />,
    },
];

export default features;
