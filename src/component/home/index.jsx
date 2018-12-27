import React                      from 'react';
import { string, arrayOf, shape } from 'prop-types';
import Header                     from '../header';
import Footer                     from '../footer';
import HomeSection                from './homeSection';
import HomeContact                from './homeContact';

const Home = ({ theme, title, logo, section, social, contact }) => {
    return [
        <Header id="header" title={title} logo={logo}/>,

        <HomeSection id="home-section" section={section} />,

        <HomeContact id="home-contact" {...contact} />,

        <Footer id="footer" />,
    ];
};

Home.propTypes = {
    title:   string,
    name:    string,
    section: arrayOf(shape({
        id: string.isRequired,
    })),
    social:  arrayOf(shape({})),
};

Home.defaultProps = {
    title:   '',
    name:    '',
    section: [],
    social:  [],
};

export default Home;
