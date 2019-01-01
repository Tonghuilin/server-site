import React                      from 'react';
import { string, arrayOf, shape } from 'prop-types';
import ImageText                  from '../image-text';
import Social                     from '../social';
import ContactForm                from '../form/contactForm';
import Team                       from '../team';
import Map                        from '../map';
import HomeCourse                 from './homeCourse';

// styled component
import { SectionWrapper } from './index.style';

const Switcher = ({ id, componentType, componentProps }) => {
    switch (componentType) {
    case 'image-text':
        return <ImageText id={id} {...componentProps} />;
    case 'social':
        return <Social id={id} {...componentProps} />;
    case 'contact-form':
        return <ContactForm id={id} {...componentProps} />;
    case 'team':
        return <Team id={id} {...componentProps} />;
    case 'map':
        return <Map/>;
    case 'home-course':
        return <HomeCourse />;
    default:
        return null;
    }
};

const HomeSection = ({ section }) => {
    return (
        <div>
            {
                section.map(
                    (secProps) => (
                        <SectionWrapper key={secProps.id}>
                            <Switcher {...secProps} />
                        </SectionWrapper>
                    ),
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
