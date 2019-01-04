import { addMarkerWithInfo, initMap } from './init';
import { getRoutingOtion }            from './routing';

/**
 * make effect - init map
 * @param who
 * @param zoom
 * @param map
 * @param setMap
 * @param point
 * @param setPoint
 * @param setInit
 * @returns {Function}
 */
export const makeEffectInitMap = ({ who, zoom, map, setMap, point, setPoint, setInit }) => () => {
    setTimeout(() => {
        if (!map) {
            initMap({ who, zoom, setMap, setPoint });
        }

        if (map && point) {
            addMarkerWithInfo({ who, map, point });
        }

        setInit(true);
    }, 0);
};

/**
 * make effect - set map theme
 * @param map
 * @param themeName
 * @returns {Function}
 */
export const makeEffectSetMapTheme = ({ map, themeName }) => () => {
    if (!map) {
        return;
    }

    if (themeName === 'light') {
        map.setMapStyle({ style: 'light' });
    } else if (themeName === 'dark') {
        map.setMapStyle({ style: 'dark' });
    }
};


/**
 * make effect - do routing
 * @param map
 * @param {function}        map.clearOverlays
 * @param {{ lat, lng }}    point
 * @param {{ lat, lng }}    startPoint
 * @param {string}          routeMode
 * @param {function}        setRoutePlans
 * @returns {Function}
 */
export const makeEffectDoRouting = ({ map, point, startPoint, routeMode, setRoutePlans }) => () => {
    if (!map || !startPoint || !point) {
        return;
    }

    map.clearOverlays();

    const options = getRoutingOtion({ map, setRoutePlans });

    let routing;

    switch (routeMode) {
    case 'walking':
        routing = new BMap.WalkingRoute(map, options);
        break;

    case 'riding':
        routing = new BMap.RidingRoute(map, options);
        break;

    case 'transit':
        routing = new BMap.TransitRoute(map, options);
        break;

    case 'driving':
        routing = new BMap.DrivingRoute(map, options);
        break;

    default:
    }

    if (!routing) {
        return;
    }

    routing.search(startPoint, point);
};
