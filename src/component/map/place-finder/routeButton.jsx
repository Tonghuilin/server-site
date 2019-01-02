import React                           from 'react';
import { string, number, shape, func } from 'prop-types';
import { MapContext }                  from '../index';

export const RouteButton = ({ lat, lng, setStartPoint }) => {
    const onClick = (evt) => {
        evt.preventDefault();

        const startPoint = new BMap.Point(lng, lat);
        setStartPoint(startPoint);
    };

    return (
        <button onClick={onClick}>
            Route
        </button>
    );
};

RouteButton.propTypes = {
    setStartPoint: func.isRequired,
    lat:           number.isRequired,
    lng:           number.isRequired,
};

const PlaceButtonWithContext = (props) => (
    <MapContext.Consumer>
        {({ setStartPoint }) => (
            <div>
                <RouteButton setStartPoint={setStartPoint} {...props} />
            </div>
        )}
    </MapContext.Consumer>
);

export default PlaceButtonWithContext;
