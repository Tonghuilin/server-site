import React, { useState, useEffect } from 'react';
import { string, number }             from 'prop-types';
import Icon                           from '../icon';
import Loading                        from '../loading';

// styled component
import { Wrapper, Image as StyledImage } from './index.style';

const Avatar = ({ title, url, color, width, height }) => {
    const [size, setSize] = useState(undefined);

    /**
     * image load handler
     * @param e
     */
    const loadHandler = (e = {}) => {
        if (!e.composedPath) {
            return;
        }

        const { width, height } = e.composedPath()[0] || {};
        setSize({ width, height });
    };

    /**
     * image error handler
     */
    const errorHandler = () => {
        setSize({});
    };

    /**
     * try to get image size
     */
    const getImageSize = () => {
        if (!size && url && process.env.IS_CLIENT) {
            const newImage = new Image();
            newImage.src   = url;
            newImage.addEventListener('load', loadHandler);
            newImage.addEventListener('error', errorHandler);
        }
    };

    useEffect(() => {
        getImageSize();
    });

    const triedButFailed = JSON.stringify(size) === '{}';
    const defaultAvatar = <Icon name="sprout" width="100%" height="100%"/>;

    let content;
    if (!url) {
        content = defaultAvatar;
    } else if (!size) {
        content = <Loading />;
    } else {
        content = triedButFailed ? defaultAvatar : <StyledImage src={url} alt={title} size={size}/>;
    }

    return (
        <Wrapper
            width={width}
            height={height}
            color={color}
            isDefault={!Boolean(url) || triedButFailed}
        >
            {content}
        </Wrapper>
    );
};

Avatar.propTypes = {
    title:  string,
    url:    string,
    color:  string,
    width:  number,
    height: number,
};

Avatar.defaultProps = {
    width:  72,
    height: 72,
};

export default Avatar;
