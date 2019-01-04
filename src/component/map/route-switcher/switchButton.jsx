import React                   from 'react';
import { func, string, shape } from 'prop-types';

// styled component
import { Title, Button } from './switchButton.style';

import { MapContext } from '../index';

const SwitchButton = ({ id, text, routeMode, setRouteMode }) => {
    const onClick = (evt) => {
        evt.preventDefault();
        setRouteMode(id);
    };

    const selected = routeMode === id;
    return <Button onClick={onClick} selected={selected}>{text}</Button>;
};

SwitchButton.propTypes = {
    id:           string.isRequired,
    text:         string.isRequired,
    routeMode:    string.isRequired,
    startPoint:   shape({}),
    setRouteMode: func.isRequired,
};

const SwitchButtonWithMapContext = (props) => (
    <MapContext.Consumer>
        {({ routeMode, setRouteMode }) => (
            <SwitchButton
                {...props}
                routeMode={routeMode}
                setRouteMode={setRouteMode}
            />
        )}
    </MapContext.Consumer>
);

export default SwitchButtonWithMapContext;
