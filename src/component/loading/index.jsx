import React                         from 'react';
import { string, number, oneOfType } from 'prop-types';

// styled component
import { Wrapper, LoadingWrapper } from './index.style';

const Loading = ({ color, width, height }) => (
    <Wrapper>
        <LoadingWrapper color={color} width={width} height={height}>
            <div/>
            <div/>
            <div/>
        </LoadingWrapper>
    </Wrapper>
);

Loading.propTypes = {
    color:  string,
    height: oneOfType([string, number]),
    width:  oneOfType([string, number]),
};

Loading.defaultProps = {
    color:  '',
    height: 64,
    width:  64,
};

export default Loading;
