import React              from 'react';
import { string, number } from 'prop-types';

import { Svg } from './index.style';
import color   from '../../theme/color';

const Icon = ({ name, width, height, color }) => {
    const iconUrl = `./asset/sprite.symbol.svg#${name}`;

    return name ? (
        <Svg fill={color} width={width} height={height}>
            <use xlinkHref={iconUrl} xlinkTitle={name}/>
        </Svg>
    ) : null;
};

Icon.propTypes = {
    name:   string,
    width:  number,
    height: number,
    color:  string,
};

Icon.defaultProps = {
    name:   '',
    width:  50,
    height: 50,
    color:  '',
};

export default Icon;
