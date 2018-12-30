import React                    from 'react';
import { string, number, bool } from 'prop-types';

import { Wrapper, Title, Body, Info } from './teamItemInfo.style';

const TeamItemInfo = ({ name, position }) => {
    return (
        <Wrapper>
            <Title>{name}</Title>
            <Body>
                <Info>{position}</Info>
            </Body>
        </Wrapper>
    );
};

TeamItemInfo.propTypes = {
    name:     string,
    position: string,
};

TeamItemInfo.defaultProps = {
    thumbnail: '',
    name:      '',
};

export default TeamItemInfo;
