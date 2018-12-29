import React                                      from 'react';
import { string, shape, bool, number, oneOfType } from 'prop-types';
import BannerMode                                 from './bannerMode';
import DefaultMode                                from './defaultMode';

// styled component
import { Wrapper } from './index.style';

const ImageText = (props) => (
    <Wrapper id={props.id} {...props.setting}>
        {props.setting.fullWidth ? <BannerMode {...props} /> : <DefaultMode {...props} />}
    </Wrapper>
);

ImageText.propTypes = {
    id:      string.isRequired,
    setting: shape({
        mode: string,
    }),
};

ImageText.defaultProps = {
    title:   '',
    body:    '',
    image:   {
        height: 'auto',
        width:  '100%',
    },
    text:    {},
    setting: {
        fullWidth: false,
        vertical: false,
        reverse:  false,
    },
};

export default ImageText;
