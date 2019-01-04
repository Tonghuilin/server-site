import React                      from 'react';
import { string, arrayOf, shape } from 'prop-types';
import Plans                      from './plans';

// styled component
import { Container, Content }     from '../../style/styled-component';
import { Wrapper }                from './index.style';

const RouteInfo = ({ plans }) => {
    return (
        <Wrapper>
            <Container>
                <Content>
                    <Plans plans={plans}/>
                </Content>
            </Container>
        </Wrapper>
    );
};

RouteInfo.propTypes = {
    plans: arrayOf(shape({})),
};

RouteInfo.defaultProps = {
    plans: [],
};

export default RouteInfo;
