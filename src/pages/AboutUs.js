import { Fragment } from 'react';
import About from '../components/about/About';
import HeaderAbout from '../layout/header/HeaderAbout';

const AboutUs = () => {
    return (
        <Fragment>
            <HeaderAbout />
            <About />
        </Fragment>
    );
};

export default AboutUs;
