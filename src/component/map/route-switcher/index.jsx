import React            from 'react';
import { string, func } from 'prop-types';
import SwitchButton     from './switchButton';

// styled component
import { Container }        from '../../style/styled-component';
import { Wrapper, Content } from './index.style';

const RouteSwitcher = () => {
    return (
        <Wrapper>
            <Container>
                <Content>
                    <SwitchButton id="walking" text="走路" />
                    <SwitchButton id="riding" text="骑车" />
                    <SwitchButton id="transit" text="公交" />
                    <SwitchButton id="driving" text="开车" />
                </Content>
            </Container>
        </Wrapper>
    );
};

export default RouteSwitcher;
