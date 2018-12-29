import React                              from 'react';
import { string, shapeOf, shape, number } from 'prop-types';

const PlaceItem = ({ uid, city, district, name, location }) => {
    const onClick = () => {
        console.log(location);
    };

    return (
        <li>
            <div>
                <span>{city} {district} {name}</span>
                <button onClick={onClick}>
                </button>
            </div>
        </li>
    );
};

PlaceItem.proPTypes = {
    uid:      string.isRequired,
    city:     string.isRequired,
    district: string.isRequired,
    name:     string.isRequired,
    province: string.isRequired,
    business: string.isRequired,
    location: shape({
        lat: number,
        lng: number,
    }).isRequired,
};

export default PlaceItem;
