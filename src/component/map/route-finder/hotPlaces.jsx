import React                              from 'react';
import { string, number, arrayOf, shape } from 'prop-types';
import RouteButton                        from './routeButton';

// styled component
import { List } from './hotPlaces.style';

const HotPlaces = ({ places }) => {
    return places.length ? (
        <List>
            {places.map((place) => <RouteButton key={`${place.lat}-${place.lng}`} {...place} />)}
        </List>
    ) : null;
};

HotPlaces.propTypes = {
    places: arrayOf(shape({})),
};

HotPlaces.defaultProps = {
    places: [],
};

export default HotPlaces;
