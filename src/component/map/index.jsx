import React, { useState, useEffect } from 'react';
import { string, number, oneOfType }  from 'prop-types';
import Loading                        from '../loading';
import PlaceFinder                    from './place-finder';
import RouteSwitcher                  from './route-switcher';
import {
    makeEffectInitMap, makeEffectSetMapTheme, makeEffectDoRouting,
}                                     from './helper/effect';

// styled component
import { Wrapper, MapWrapper } from './index.style';

import { GlobalContext } from '../index';

export const MapContext = React.createContext();

const POINT_THL = {
    lat:     34.266915,
    lng:     117.197103,
    name:    '通慧林',
    phone:   '81238123',
    mobile:  '13712341234',
    address: '1 Foo Road, Bar Suburb, Xuzhou',
};

const Map = ({ themeName, width, height, zoom }) => {
    const [init, setInit]             = useState(false);
    const [map, setMap]               = useState();
    const [point, setPoint]           = useState();
    const [routeMode, setRouteMode]   = useState('walking');
    const [startPoint, setStartPoint] = useState();

    const who = POINT_THL;

    useEffect(
        makeEffectInitMap({ who, zoom, map, setMap, point, setPoint, setInit }),
        [init],
    );
    useEffect(
        makeEffectSetMapTheme({ map, themeName }),
        [themeName],
    );
    useEffect(
        makeEffectDoRouting({ map, point, startPoint, routeMode }),
        [routeMode, startPoint],
    );

    const contextValue = {
        map, setMap, point, setPoint, routeMode, setRouteMode, startPoint, setStartPoint,
    };

    return (
        <MapContext.Provider value={contextValue}>
            <Wrapper>
                <MapWrapper width={width} height={height} id="thl-bmap">
                    <Loading/>
                </MapWrapper>
                <RouteSwitcher/>
                <PlaceFinder/>
            </Wrapper>
        </MapContext.Provider>
    );
};

Map.propTypes = {
    themeName: string.isRequired,
    width:     oneOfType([number, string]),
    height:    oneOfType([number, string]),
    zoom:      number,
};

Map.defaultProps = {
    width:  '100%',
    height: '300',
    zoom:   16,
};

const MapWithGlobalContext = (props) => (
    <GlobalContext.Consumer>
        {({ themeName }) => <Map {...props} themeName={themeName}/>}
    </GlobalContext.Consumer>
);

export default MapWithGlobalContext;
