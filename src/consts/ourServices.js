import { ReactComponent as CalculatorSvg } from './../icons/calculator.svg';
import { ReactComponent as MeasureSvg } from './../icons/measure.svg';
import { ReactComponent as ReplaceSvg } from './../icons/replace.svg';

const ourServices = [
    {
        id: 1,
        title: 'We calculate the purchase price',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
        icon: <CalculatorSvg />,
    },
    {
        id: 2,
        title: 'We produce the products',
        text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum..',
        icon: <MeasureSvg />,
    },
    {
        id: 3,
        title: 'We replace the old glass',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
        icon: <ReplaceSvg />,
    },
];

export default ourServices;
