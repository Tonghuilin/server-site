import React      from 'react';
import { string } from 'prop-types';
import logoUrl    from '../../asset/logo.png';

const Logo = ({ title, url }) => (<img src={url} alt={title}/>);

Logo.propTypes = {
    title: string,
    url:   string,
};

Logo.defaultProps = {
    title: '',
    url:   logoUrl,
};

export default Logo;
