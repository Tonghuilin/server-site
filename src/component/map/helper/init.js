import { getInfoBoxHtml } from '../mapElement';

/**
 * Init map and center point
 * @param who
 * @param zoom
 * @param setMap
 * @param setPoint
 * @returns {{map: BMap.Map, point: BMap.Point}}
 */
export const initMap = ({ who, zoom, setMap, setPoint }) => {
    const { lat, lng } = who;
    const option       = {
        enableMapClick: false,
    };

    const map   = new BMap.Map('thl-bmap', option);
    const point = new BMap.Point(lng, lat);

    map.centerAndZoom(point, zoom);

    map.addControl(new BMap.NavigationControl());
    map.addControl(new BMap.ScaleControl());
    map.setCurrentCity('徐州');

    setMap(map);
    setPoint(point);

    return { map, point };
};

/**
 * add info box to marker
 *
 * @param map
 * @param point
 * @param who
 * @returns {BMapLib.InfoBox}
 */
export const createInfoBox = ({ map, point, who }) => {
    const html   = getInfoBoxHtml({ who });
    const option = {
        boxStyle:        {
            width:         280,
            height:        150,
            paddingBottom: 14,
        },
        closeIconUrl:    require('../../../asset/cancel.png'),
        closeIconMargin: 4,
        align:           INFOBOX_AT_TOP,
        enableAutoPan:   true,
    };

    const infoBox = new BMapLib.InfoBox(map, html, option);

    infoBox.addEventListener('close', () => {
        map.panTo(point);
    });

    return infoBox;
};

/**
 * add marker to map
 * @param map
 * @param who
 * @param point
 */
export const addMarkerWithInfo = ({ map, who, point }) => {
    const infoBox = createInfoBox({ map, point, who });
    const marker  = new BMap.Marker(
        point,
        {
            enableMassClear: false,
            title:           who.name,
            raiseOnDrag:     true,
        },
    );

    marker.addEventListener('click', () => {
        infoBox.open(marker);
    });
    map.addOverlay(marker);
};
