import React from 'react';
import { string, arrayOf, shape } from 'prop-types';
import { Title } from './index.style';
import Header from '../header';
import ImageText from '../image-text';
import Social from '../social';
import HomeContact from './homeContact';

const Switcher = ({ id, componentType, componentProps }) => {
    switch (componentType) {
    case 'image-text':
        return <ImageText id={id} {...componentProps} />;
    case 'social':
        return <Social id={id} {...componentProps} />;
    default:
        return null;
    }
};

const Home = ({ title, logo, section, social, contact }) => (
    <div>
        <Header title={title} logo={logo}/>

        <Social {...social} />

        {
            section.map(
                (secProps) => (<Switcher key={secProps.id} {...secProps} />),
            )
        }

        <HomeContact {...contact} />
    </div>
);

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
