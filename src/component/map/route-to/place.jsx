import React                           from 'react';
import { number, shape, string, func } from 'prop-types';
import { MapContext }                  from '../index';

// styled component
import { Button } from './index.style';

const RouteToItem = ({ point, info, endPoint, setEndPoint }) => {
    const onClick = (evt) => {
        evt.preventDefault();
        setEndPoint(point);
    };

    return (
        <Button onClick={onClick} selected={point.equals(endPoint)}>
            {info.name}
        </Button>
    );
};

RouteToItem.propTypes = {
    info:        shape({
        name: string,
    }).isRequired,
    point:       shape({
        lat: number,
        lng: number,
    }).isRequired,
    marker:      shape({}).isRequired,
    setEndPoint: func.isRequired,
};

const RouteToItemWithMapContext = (props) => (
    <MapContext.Consumer>
        {({ endPoint, setEndPoint }) => <RouteToItem {...props} endPoint={endPoint} setEndPoint={setEndPoint}/>}
    </MapContext.Consumer>
);

export default RouteToItemWithMapContext;
