import React                                      from 'react';
import { string, shape, bool, number, oneOfType } from 'prop-types';
import BannerMode                                 from './bannerMode';
import DefaultMode                                from './defaultMode';

// styled component
import { Wrapper } from './index.style';

const ImageText = (props) => (
    <Wrapper id={props.id} {...props.setting}>
        {props.setting.isBanner ? <BannerMode {...props} /> : <DefaultMode {...props} />}
    </Wrapper>
);

ImageText.propTypes = {
    id:      string.isRequired,
    setting: shape({
        isBanner: bool,
    }),
};

ImageText.defaultProps = {
    setting: {
        isBanner: false,
    },
};

export default ImageText;
