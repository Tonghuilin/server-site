import React                              from 'react';
import { string, shapeOf, shape, number } from 'prop-types';
import RouteButton                        from './routeButton';

const PlaceItem = ({ uid, city, district, name, location }) => {
    return (
        <li>
            <div>
                <span>{city} {district} {name}</span>
                <RouteButton {...location} />
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
