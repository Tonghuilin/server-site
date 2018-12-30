import React, { useState, useEffect }       from 'react';
import { string, number, shape, oneOfType } from 'prop-types';
import Icon                                 from '../icon';
import Loading                              from '../loading';

// styled component
import { Wrapper, DefaultIconWrapper, Image as StyledImage } from './index.style';

const SmartImage = ({ src, alt, width, height, responsive, defaultIconName, defaultIconStyle }) => {
    const [size, setSize]         = useState(undefined);
    const [tweaking, setTweaking] = useState(false);

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
        setTweaking(false);
    };

    /**
     * image error handler
     */
    const errorHandler = () => {
        setSize({});
        setTweaking(false);
    };

    /**
     * try to get image size
     */
    const getImageSize = () => {
        if (!size && src && process.env.IS_CLIENT) {
            setTweaking(true);

            const newImage = new Image();
            newImage.src   = src;
            newImage.addEventListener('load', loadHandler);
            newImage.addEventListener('error', errorHandler);
        }
    };

    useEffect(() => {
        getImageSize();
    });

    const triedButFailed = JSON.stringify(size) === '{}';
    const defaultIcon    = (
        <DefaultIconWrapper customStyle={defaultIconStyle}>
            <Icon name={defaultIconName} width="100%" height="100%"/>
        </DefaultIconWrapper>
    );

    let content;
    if (!src) {
        content = defaultIcon;
    } else if (!size && tweaking) {
        content = <Loading/>;
    } else {
        content = triedButFailed ? defaultIcon : <StyledImage src={src} alt={alt} size={size}/>;
    }

    return (
        <Wrapper
            width={width}
            height={height}
            responsive={responsive}
            isDefault={!Boolean(src) || triedButFailed}
        >
            {content}
        </Wrapper>
    );
};

SmartImage.propTypes = {
    alt:              string,
    src:              string,
    width:            oneOfType([number, string]),
    height:           oneOfType([number, string]),
    responsive:       shape({
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
    defaultIconName:  string,
    defaultIconStyle: shape({}),
};

SmartImage.defaultProps = {
    alt:              '',
    src:              '',
    width:            70,
    height:           70,
    responsive:       {
        tablet: {
            width:  150,
            height: 150,
        },
    },
    defaultIconName:  'broken-image',
    defaultIconStyle: {},
};

export default SmartImage;
