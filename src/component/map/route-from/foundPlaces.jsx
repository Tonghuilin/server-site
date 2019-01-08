import React                              from 'react';
import { arrayOf, shape, string, number } from 'prop-types';
import FoundSinglePlace                   from './foundSinglePlace';
import CloseButton                        from './closeButton';

// styled component
import { Wrapper, List } from './foundPlaces.style';


const FoundPlaces = ({ places }) => {
    return (
        <Wrapper>
            <CloseButton />

            <List>
                {
                    places.map((place, index) => <FoundSinglePlace key={index} {...place} />)
                }
            </List>
        </Wrapper>
    );
};

FoundPlaces.propTypes = {
    places: arrayOf(shape({})),
};

FoundPlaces.defaultProps = {
    places: [],
};

export default FoundPlaces;
