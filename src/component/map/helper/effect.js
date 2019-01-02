import { addMarkerWithInfo, initMap } from './init';

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
    }, 500);
};

/**
 * make effect - set map theme
 * @param map
 * @param themeName
 * @returns {Function}
 */
export const makeEffectSetMapTheme = ({ map, themeName }) => () => {
    if (!map) { return; }

    if (themeName === 'light') {
        map.setMapStyle({ style: 'light' });
    } else if (themeName === 'dark') {
        map.setMapStyle({ style: 'dark' });
    }
};

/**
 * make effect - do routing
 * @param map
 * @param {function} map.clearOverlays
 * @param point
 * @param startPoint
 * @param routeMode
 * @returns {Function}
 */
export const makeEffectDoRouting = ({ map, point, startPoint, routeMode }) => () => {
    if (!map || !startPoint || !point) {
        return;
    }

    const option = {
        renderOptions: { map: map },
        autoViewpoint: true,
    };

    map.clearOverlays();

    let routing;

    switch (routeMode) {
    case 'walking':
        routing = new BMap.WalkingRoute(map, option);
        break;

    case 'riding':
        routing = new BMap.RidingRoute(map, option);
        break;

    case 'transit':
        routing = new BMap.TransitRoute(map, option);
        break;

    case 'driving':
        routing = new BMap.DrivingRoute(map, option);
        break;

    default:
    }

    if (!routing) {
        return;
    }

    routing.search(startPoint, point);
    console.log(routing);
};
