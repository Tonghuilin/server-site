import { getInfoBoxHtml } from './mapElement';

/**
 * Init map and center point
 * @param initView
 * {{
 *     lat
 *     lng
 *     zoom
 * }}
 * @returns {{map: BMap.Map, point: BMap.Point}}
 */
export const initMap = ({ initView }) => {
    const { lat, lng, zoom } = initView;
    const option             = {
        enableMapClick: false,
        minZoom:        10,
    };

    const map   = new BMap.Map('thl-bmap', option);
    const point = new BMap.Point(lng, lat);

    map.centerAndZoom(point, zoom);

    // map.addControl(new BMap.ScaleControl());
    // map.enableScrollWheelZoom();
    map.addControl(new BMap.NavigationControl());
    map.setCurrentCity('徐州');

    return { map, point };
};

/**
 * add info box to marker
 *
 * @param map
 * @param point
 * @param info
 * @param initViewPoint
 *
 * @returns {BMapLib.InfoBox}
 */
export const createInfoBox = ({ map, point, info, initViewPoint }) => {
    const html   = getInfoBoxHtml({ info });
    const option = {
        boxStyle:        {
            width:         280,
            height:        150,
            paddingBottom: 14,
        },
        closeIconUrl:    require('../../../asset/cross.png'),
        closeIconMargin: 4,
        align:           INFOBOX_AT_TOP,
        enableAutoPan:   true,
    };

    const infoBox = new BMapLib.InfoBox(map, html, option);
    infoBox.addEventListener('close', () => {
        map.panTo(initViewPoint);
    });

    return infoBox;
};

/**
 * init our point, marker, info box
 * @param map
 * @param who
 * {{
 *     lat
 *     lng
 *     name
 * }}
 * @param initViewPoint
 * @returns {{point: BMap.Point, marker: BMap.Marker, infoBox: BMapLib.InfoBox}}
 */
export const initUs = ({ map, who, initViewPoint }) => {
    const { lat, lng, name } = who;

    // create marker
    const point  = new BMap.Point(lng, lat);
    const marker = new BMap.Marker(
        point,
        {
            enableMassClear: false,
            title:           name,
            raiseOnDrag:     true,
        },
    );

    // create info box
    const infoBox = createInfoBox({ map, point, info: who, initViewPoint });
    marker.addEventListener('click', () => {
        infoBox.open(marker);
    });

    map.addOverlay(marker);

    return { point, marker, infoBox, info: who };
};

/**
 * apply map theme
 * @param map
 * @param darkMode
 * @returns {*}
 */
export const applyMapTheme = ({ map, darkMode }) => {
    if (!map) {
        return;
    }

    if (darkMode) {
        return map.setMapStyle({ style: 'dark' });
    }
    return map.setMapStyle({ style: 'light' });
};
