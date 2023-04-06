import { ReactComponent as CalculatorSvg } from './../icons/calculator.svg';
import { ReactComponent as MeasureSvg } from './../icons/measure.svg';
import { ReactComponent as ReplaceSvg } from './../icons/replace.svg';

const ourServices = [
    {
        id: 1,
        title: 'Calculam pret achizitionare',
        text: 'Ne comunici ce produse iti doresti si dimensiunile acestora quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna vitae proin sagittis nisl rhoncus mattis rhoncus urna',
        icon: <CalculatorSvg />,
    },
    {
        id: 2,
        title: 'Producem termpoanul',
        text: 'Calculare pret produse, stabilire data/durata si achitarea avansului sed libero enim sed faucibus turpis in eu mi bibendum neque egestas  acestora quam adipiscing vitae proin sagittis nisl rhoncus mattis.',
        icon: <MeasureSvg />,
    },
    {
        id: 3,
        title: 'Inlocuim geamul vechi',
        text: 'Livrarea si montajul termopanelor. Etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis eu volutpat vitae proin sagittis nisl rhoncus sed libero.',
        icon: <ReplaceSvg />,
    },
];

export default ourServices;
