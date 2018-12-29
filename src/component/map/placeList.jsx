import React                              from 'react';
import { arrayOf, shape, string, number } from 'prop-types';
import PlaceItem                          from './placeItem';

const PlaceList = ({ places }) => {
    return (
        <ul>
            {
                places.map(place => <PlaceItem {...place} />)
            }
        </ul>
    );
};

PlaceList.propTypes = {
    places: arrayOf(shape({})),
};

PlaceList.defaultProps = {
    places: [],
};

export default PlaceList;
