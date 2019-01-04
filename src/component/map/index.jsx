import React, { useState, useEffect }                from 'react';
import { string, number, oneOfType, arrayOf, shape } from 'prop-types';
import {
    makeEffectInitMap, makeEffectSetMapTheme, makeEffectDoRouting,
}                                                    from './helper/effect';

import Loading       from '../loading';
import RouteFinder   from './route-finder';
import RouteSwitcher from './route-switcher';
import RouteInfo     from './route-info';

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

const Map = ({ themeName, width, height, zoom, hotPlaces }) => {
    const [init, setInit]             = useState(false);
    const [map, setMap]               = useState();
    const [point, setPoint]           = useState();
    const [startPoint, setStartPoint] = useState();
    const [routeMode, setRouteMode]   = useState('walking');
    const [routePlans, setRoutePlans]   = useState([]);

    const contextValue = {
        map, setMap, point, setPoint, routeMode, setRouteMode, startPoint, setStartPoint, routePlans, setRoutePlans,
    };

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
        makeEffectDoRouting({ map, point, startPoint, routeMode, setRoutePlans }),
        [routeMode, startPoint],
    );

    return (
        <MapContext.Provider value={contextValue}>
            <Wrapper>
                <RouteFinder hotPlaces={hotPlaces}/>

                <MapWrapper width={width} height={height} id="thl-bmap">
                    <Loading/>
                </MapWrapper>

                <RouteSwitcher/>
                <RouteInfo plans={routePlans} />
            </Wrapper>
        </MapContext.Provider>
    );
};

Map.propTypes = {
    themeName: string.isRequired,
    width:     oneOfType([number, string]),
    height:    oneOfType([number, string]),
    zoom:      number,
    hotPlaces: arrayOf(shape({})),
};

Map.defaultProps = {
    width:     '100%',
    height:    '300',
    zoom:      16,
    hotPlaces: [],
};

const MapWithGlobalContext = (props) => (
    <GlobalContext.Consumer>
        {({ themeName }) => <Map {...props} themeName={themeName}/>}
    </GlobalContext.Consumer>
);

export default MapWithGlobalContext;
