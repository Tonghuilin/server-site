import React              from 'react';
import { string, number } from 'prop-types';
import { Wrapper, Image } from './index.style';
import logoUrl            from '../../asset/logo.png';

const Logo = ({ width, height, title, url, linkTo }) => (
    <Wrapper width={width} height={height}>
        <a href={linkTo}>
            <Image src={url} alt={title}/>
        </a>
    </Wrapper>
);

Logo.propTypes = {
    title:  string,
    url:    string,
    linkTo: string,
    width:  number,
    height: number,
};

Logo.defaultProps = {
    title:  '',
    url:    logoUrl,
    linkTo: '/',
    width:  100,
    height: 100,
};

export default Logo;
