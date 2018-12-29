import React              from 'react';
import { string, number } from 'prop-types';
import { MapContext }     from './index';

export const RouteButton = ({ map, lat, lng }) => {

    return (
        <button onClick={}>

        </button>
    );
};

const PlaceButtonWithContext = (props) => (
    <MapContext.Consumer>
        {({ map }) => (
            <div>
                <RouteButton map={map} {...props} />
            </div>
        )}
    </MapContext.Consumer>
);

export default PlaceButtonWithContext;
