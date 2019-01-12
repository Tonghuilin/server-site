import React, { useState, useEffect } from 'react';
import {
    bool, string, number, oneOfType, arrayOf, shape,
}                                     from 'prop-types';
import {
    makeEffectInitMap, makeEffectSwitchMapTheme, makeEffectDoRouting,
}                                     from './helper/effect';

// react components
import Loading       from '../loading';
import MapTitle      from './mapTitle';
import RouteTo       from './route-to';
import RouteFrom     from './route-from';
import RouteSwitcher from './route-switcher';
import RouteInfo     from './route-info';

// styled component
import { Wrapper, MapWrapper } from './index.style';

// contexts
import { GlobalContext } from '../index';

export const MapContext = React.createContext();

const Map = ({ darkMode, title, fromTitle, toTitle, width, height, zoom, hotPlaces, ourPlaces, noPlanMessage }) => {
    const [init, setInit]             = useState(false);
    const [failed, setFailed]         = useState(false);
    const [map, setMap]               = useState();
    const [point, setPoint]           = useState();
    const [us, setUs]                 = useState([]);
    const [endPoint, setEndPoint]     = useState();
    const [startPoint, setStartPoint] = useState();
    const [routeMode, setRouteMode]   = useState('walking');
    const [routePlans, setRoutePlans] = useState([]);

    const contextValue = {
        map, setMap,
        point, setPoint,
        us, setUs,
        endPoint, setEndPoint,
        startPoint, setStartPoint,
        routeMode, setRouteMode,
        routePlans, setRoutePlans,
        failed, setFailed,
    };

    const initView = {
        lat: 34.266861,
        lng: 117.198387,
        zoom,
    };

    useEffect(
        makeEffectInitMap({ ourPlaces, initView, darkMode, map, setMap, setUs, setEndPoint, setInit, setFailed }),
        [init],
    );
    useEffect(
        makeEffectSwitchMapTheme({ map, darkMode }),
        [darkMode],
    );
    useEffect(
        makeEffectDoRouting({ map, endPoint, startPoint, routeMode, setRoutePlans }),
        [routeMode, startPoint, endPoint],
    );

    return (
        <MapContext.Provider value={contextValue}>
            <Wrapper>
                {init && <MapTitle title={title}/>}

                {init && <RouteTo collections={us} title={toTitle}/>}

                {init && <RouteFrom hotPlaces={hotPlaces} title={fromTitle}/>}

                <MapWrapper failed={failed} width={width} height={height} id="thl-bmap">
                    <Loading/>
                </MapWrapper>

                {init && <RouteSwitcher/>}
                {init && <RouteInfo plans={routePlans} noPlanMessage={noPlanMessage}/>}
            </Wrapper>
        </MapContext.Provider>
    );
};

Map.propTypes = {
    title:         string,
    fromTitle:     string,
    toTitle:       string,
    width:         oneOfType([number, string]),
    height:        oneOfType([number, string]),
    zoom:          number,
    darkMode:      bool,
    hotPlaces:     arrayOf(shape({})),
    ourPlaces:     arrayOf(shape({})),
    noPlanMessage: string,
};

Map.defaultProps = {
    title:         '',
    fromTitle:     '',
    toTitle:       '',
    width:         '100%',
    height:        '300',
    zoom:          15,
    darkMode:      false,
    hotPlaces:     [],
    ourPlaces:     [],
    noPlanMessage: '',
};

const MapWithGlobalContext = (props) => (
    <GlobalContext.Consumer>
        {({ themeName }) => <Map {...props} darkMode={themeName === 'dark'}/>}
    </GlobalContext.Consumer>
);

export default MapWithGlobalContext;
