import React                  from 'react';
import { func }               from 'prop-types';
import Icon                   from '../../icon';

import { RouteFinderContext } from './index';

// styled component
import { Button } from './closeButton.style';

const CloseButton = ({ setPlaces }) => {
    const onClick = (evt) => {
        evt.preventDefault();
        setPlaces([]);
    };

    return (
        <Button onClick={onClick} aria-label="close found places list">
            <Icon name="cross" width="20" height="20"/>
        </Button>
    );
};

CloseButton.propTypes = {
    setPlaces: func.isRequired,
};

const CloseButtonWithRouteFinderContext = (props) => (
    <RouteFinderContext.Consumer>
        {({ setPlaces }) => <CloseButton {...props} setPlaces={setPlaces}/>}
    </RouteFinderContext.Consumer>
);

export default CloseButtonWithRouteFinderContext;
