import React                    from 'react';
import { string, number, bool } from 'prop-types';

// styled component
import { SubHeading }           from '../style/styled-component';
import { Wrapper, Title, Heading, Body, BodyInner } from './teamItemInfo.style';

const TeamItemInfo = ({ name, position, description }) => {
    return (
        <Wrapper>
            <Title>
                <Heading>{name}</Heading>
                <SubHeading>{position}</SubHeading>
            </Title>

            {Boolean(description) && (
                <Body>
                    <BodyInner>
                        {description}
                    </BodyInner>
                </Body>
            )}
        </Wrapper>
    );
};

TeamItemInfo.propTypes = {
    name:        string,
    position:    string,
    description: string,
};

TeamItemInfo.defaultProps = {
    thumbnail: '',
    name:      '',
    description: '',
};

export default TeamItemInfo;
