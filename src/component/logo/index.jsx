import React                                from 'react';
import { string, number, oneOfType, shape } from 'prop-types';
import StartImage                           from '../smart-image';
import logoUrl                              from '../../asset/logo.png';

import { Wrapper } from './index.style';

const Logo = ({ title, url, linkTo, width, height, responsive }) => (
    <Wrapper>
        <a href={linkTo}>
            <StartImage src={url} alt={title} width={width} height={height} responsive={responsive}/>
        </a>
    </Wrapper>
);

Logo.propTypes = {
    title:      string,
    url:        string,
    linkTo:     string,
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

Logo.defaultProps = {
    title:      '',
    url:        logoUrl,
    linkTo:     '/',
    width:      112,
    height:     50,
    responsive: {
        tablet: {
            width:  156,
            height: 70,
        },
    },
};

export default Logo;
