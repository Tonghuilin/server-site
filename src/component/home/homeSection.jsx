import React                      from 'react';
import { string, arrayOf, shape } from 'prop-types';
import ImageText                  from '../image-text';
import Social                     from '../social';

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

const HomeSection = ({ section }) => {
    return (
        <div>
            {
                section.map(
                    (secProps) => (<Switcher key={secProps.id} {...secProps} />),
                )
            }
        </div>
    );
};

HomeSection.propTypes = {
    section: arrayOf(shape({
        id: string.isRequired,
    })),
};

HomeSection.defaultProps = {
    section: [],
};

export default HomeSection;
