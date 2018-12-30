import React, { useState, useEffect } from 'react';
import { string, number }             from 'prop-types';
import SmartImage                     from '../smart-image';

// styled component
import { Wrapper } from './index.style';

const Avatar = ({ title, url, borderColor, width, height }) => {
    const responsive = {
        tablet: {
            width: 72,
            height: 72,
        }
    };

    const defaultIconStyle = {
        backgroundColor: 'transparent',
        padding: '0.3125rem',
    };

    return (
        <Wrapper
            width={width}
            height={height}
            borderColor={borderColor}
        >
            <SmartImage
                src={url}
                alt={title}
                defaultIconName={'sprout'}
                width={width}
                height={height}
                responsive={responsive}
                defaultIconStyle={defaultIconStyle}
            />
        </Wrapper>
    );
};

Avatar.propTypes = {
    title:       string,
    url:         string,
    borderColor: string,
    width:       number,
    height:      number,
};

Avatar.defaultProps = {
    title:       '',
    url:         '',
    width:       36,
    height:      36,
    borderColor: '',
};

export default Avatar;
