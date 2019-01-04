import React                              from 'react';
import { string, shapeOf, shape, number } from 'prop-types';
import RouteButton                        from './routeButton';

// styled component
import { Item, Span, NameSpan } from './foundPlaces.style';

const FoundSinglePlace = ({ uid, city, district, name, location }) => {
    return (
        <Item>
            <Span>{city}</Span>

            <Span>{district}</Span>

            <NameSpan>{name}</NameSpan>

            <Span><RouteButton {...location} /></Span>
        </Item>
    );
};

FoundSinglePlace.proPTypes = {
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

export default FoundSinglePlace;
