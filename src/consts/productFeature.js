import { ReactComponent as IstallSvg } from './../icons/security.svg';
import { ReactComponent as ProductionSvg } from './../icons/insulation.svg';
import { ReactComponent as TransportSvg } from './../icons/termoter.svg';

const productFeature = [
    {
        id: 1,
        title: 'Noise Protection',
        icon: <ProductionSvg />,
    },
    {
        id: 2,
        title: 'Security',
        icon: <IstallSvg />,
    },
    {
        id: 3,
        title: 'Temperature insulation',
        icon: <TransportSvg />,
    },
];

export default productFeature;
