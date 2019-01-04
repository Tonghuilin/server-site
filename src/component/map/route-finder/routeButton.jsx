import React                           from 'react';
import { string, number, shape, func } from 'prop-types';
import { MapContext }                  from '../index';
import { RouteFinderContext }          from './index';

// styled component
import { Button } from './routeButton.style';


export const RouteButton = ({ title, lat, lng, startPoint, setStartPoint, setPlaces }) => {
    const onClick = (evt) => {
        evt.preventDefault();

        const startPoint = new BMap.Point(lng, lat);
        setStartPoint(startPoint);
        setPlaces([]);
    };

    const selected = (startPoint.lat === lat && startPoint.lng === lng);
    return <Button onClick={onClick} selected={selected}>{title}</Button>;
};

RouteButton.propTypes = {
    startPoint:    shape({
        lat: number,
        lng: number,
    }),
    setStartPoint: func.isRequired,
    setPlaces:     func.isRequired,
    lat:           number.isRequired,
    lng:           number.isRequired,
    title:         string,
};

RouteButton.defaultProps = {
    title:      'Route',
    startPoint: {},
};

const PlaceButtonWithContext = (props) => (
    <MapContext.Consumer>
        {({ startPoint, setStartPoint }) => (
            <RouteFinderContext.Consumer>
                {({ setPlaces }) => (
                    <RouteButton
                        setStartPoint={setStartPoint}
                        startPoint={startPoint}
                        setPlaces={setPlaces}
                        {...props}
                    />
                )}
            </RouteFinderContext.Consumer>
        )}
    </MapContext.Consumer>
);

export default PlaceButtonWithContext;
