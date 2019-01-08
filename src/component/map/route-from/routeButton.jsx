import React                           from 'react';
import { string, number, shape, func } from 'prop-types';
import { MapContext }                  from '../index';
import { RouteFinderContext }          from './index';

// styled component
import { Button } from '../index.style';


export const RouteButton = ({ title, lat, lng, startPoint, setStartPoint, setPlaces }) => {
    const onClick = (evt) => {
        evt.preventDefault();

        const startPoint = new BMap.Point(lng, lat);
        // console.log(startPoint);

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
    title:      '寻找路线',
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
