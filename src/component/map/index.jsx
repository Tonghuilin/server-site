import React, { useState, useEffect } from 'react';
import { string, number, oneOfType }  from 'prop-types';
import Loading                        from '../loading';
import PlaceFinder                    from './placeFinder';
import { getInfoBoxHtml }             from './mapElement';
import { GlobalContext }              from '../index';

// styled component
import { Wrapper, MapWrapper } from './index.style';

export const MapContext = React.createContext();

const POINT_THL = {
    lat:     34.266915,
    lng:     117.197103,
    name:    '通慧林',
    phone:   '81238123',
    mobile:  '13712341234',
    address: '1 Foo Road, Bar Suburb, Xuzhou',
};

/**
 * Init map and center point
 * @param who
 * @param zoom
 * @param setMap
 * @param setPoint
 * @returns {{map: BMap.Map, point: BMap.Point}}
 */
const init = ({ who, zoom, setMap, setPoint }) => {
    const { lat, lng } = who;

    const map   = new BMap.Map('thl-bmap');
    const point = new BMap.Point(lng, lat);

    setMap(map);
    setPoint(point);

    map.centerAndZoom(point, zoom);
    map.addControl(new BMap.NavigationControl());
    map.addControl(new BMap.ScaleControl());
    map.setCurrentCity('徐州');

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
const createInfoBox = ({ map, point, who }) => {
    const html   = getInfoBoxHtml({ who });
    const option = {
        boxStyle:        {
            width:         280,
            height:        150,
            paddingBottom: 14,
        },
        closeIconUrl:    require('../../asset/cancel.png'),
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
const addMarkerWithInfo = ({ map, who, point }) => {
    const infoBox = createInfoBox({ map, point, who });
    const marker  = new BMap.Marker(point);

    marker.addEventListener('click', () => {
        infoBox.open(marker);
    });
    map.addOverlay(marker);
};

const Map = ({ themeName, width, height, zoom }) => {
    const [map, setMap]     = useState();
    const [point, setPoint] = useState();
    const who               = POINT_THL;

    useEffect(() => {
        setTimeout(() => {
            if (!map) {
                console.log('here');
                init({ who, zoom, setMap, setPoint });
            }
        }, 500);

        if (map && point) {
            addMarkerWithInfo({ who, map, point });
        }

        if (map && themeName === 'light') {
            map.setMapStyle({ style: 'light' });
        }

        if (map && themeName === 'dark') {
            map.setMapStyle({ style: 'dark' });
        }
    });

    return (
        <MapContext.Provider value={{ map }}>
            <Wrapper>
                <MapWrapper width={width} height={height} id="thl-bmap">
                    <Loading/>
                </MapWrapper>
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
