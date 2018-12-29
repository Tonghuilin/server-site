import React              from 'react';
import { string, number, oneOfType } from 'prop-types';
import { Wrapper, Image } from './index.style';
import logoUrl            from '../../asset/logo.png';

const Logo = ({ width, height, title, url, linkTo }) => (
    <Wrapper width={width} height={height}>
        <a href={linkTo}>
            <Image src={url} alt={title} width={width} height={height} />
        </a>
    </Wrapper>
);

Logo.propTypes = {
    title:  string,
    url:    string,
    linkTo: string,
    width:  oneOfType([number, string]),
    height: oneOfType([number, string]),
};

Logo.defaultProps = {
    title:  '',
    url:    logoUrl,
    linkTo: '/',
    width:  'auto',
    height: '100%',
};

export default Logo;
