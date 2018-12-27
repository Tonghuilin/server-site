import React                      from 'react';
import { string, arrayOf, shape } from 'prop-types';
import Header                     from '../header';
import Footer                     from '../footer';
import HomeSection                from './homeSection';

const Home = ({ theme, title, logo, section }) => {
    return [
        <Header key="header" title={title} logo={logo}/>,

        <HomeSection key="home-section" section={section} />,

        <Footer key="footer" />,
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
