import React                                from 'react';
import { string, number, oneOfType, shape } from 'prop-types';

import { Svg } from './index.style';

const Icon = ({ id, name, width, height, color, responsive }) => {
    const iconUrl = `./asset/sprite.symbol.svg#${name}`;

    return name ? (
        <Svg id={id} fill={color} width={width} height={height} responsive={responsive}>
            <use xlinkHref={iconUrl} xlinkTitle={name}/>
        </Svg>
    ) : null;
};

Icon.propTypes = {
    id:         string,
    name:       string,
    color:      string,
    width:      oneOfType([number, string]),
    height:     oneOfType([number, string]),
    responsive: shape({
        tablet:          shape({
            width:  oneOfType([number, string]),
            height: oneOfType([number, string]),
        }),
        tabletLandscape: shape({
            width:  oneOfType([number, string]),
            height: oneOfType([number, string]),
        }),
        desktop:         shape({
            width:  oneOfType([number, string]),
            height: oneOfType([number, string]),
        }),
    }),
};

Icon.defaultProps = {
    id:         '',
    name:       '',
    color:      '',
    width:      50,
    height:     50,
    responsive: {},
};

export default Icon;
