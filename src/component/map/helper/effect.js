import { initUs, initMap, applyMapTheme } from './map';
import { getRoutingOption }               from './routing';

/**
 * make effect - init map
 * @param ourPlaces
 * {{
 *     lat
 *     lng
 *     name
 * }[]}
 * @param initView
 * {{
 *     lat
 *     lng
 *     zoom
 * }}
 * @param darkMode
 * @param map
 * @param setMap
 * @param setUs
 * @param setEndPoint
 * @param setInit
 * @returns {Function}
 */
export const makeEffectInitMap = ({ ourPlaces, initView, darkMode, map, setMap, setUs, setEndPoint, setInit }) => () => {
    setTimeout(() => {
        if (Boolean(map)) {
            return;
        }

        const { map: newMap, point: initViewPoint } = initMap({ initView, setMap });
        applyMapTheme({ map: newMap, darkMode });

        const us              = ourPlaces.map((place) => initUs({ who: place, map: newMap, initViewPoint }));
        const defaultEndPoint = us[0].point;

        setMap(newMap);
        setUs(us);
        setEndPoint(defaultEndPoint);
        setInit(true);
    }, 0);
};

/**
 * make effect - switch map theme
 * @param map
 * @param {boolean} darkMode
 * @returns {function}
 */
export const makeEffectSwitchMapTheme = ({ map, darkMode }) => () => {
    applyMapTheme({ map, darkMode });
};


/**
 * make effect - do routing
 * @param map
 * @param {function}        map.clearOverlays
 * @param {{ lat, lng }}    endPoint
 * @param {{ lat, lng }}    startPoint
 * @param {string}          routeMode
 * @param {function}        setRoutePlans
 * @returns {Function}
 */
export const makeEffectDoRouting = ({ map, endPoint, startPoint, routeMode, setRoutePlans }) => () => {
    if (!map || !startPoint || !endPoint) {
        return;
    }

    map.clearOverlays();

    const options = getRoutingOption({ map, setRoutePlans });

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

    routing.search(startPoint, endPoint);
};
