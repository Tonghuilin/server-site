import React                      from 'react';
import { string, arrayOf, shape } from 'prop-types';
import Logo                       from '../logo';
import DayNight                   from './day-night';

// styled component
import { Content, Wrapper, LeftWrapper, RightWrapper, Title, Button } from './index.style';
import { Container }                                                  from '../style/styled-component';

const Header = ({ title, logo, nav }) => {
    return (
        <Wrapper>
            <Container>
                <Content>
                    <LeftWrapper>
                        <Logo {...logo} />
                        <Title>{title}</Title>
                    </LeftWrapper>

                    <RightWrapper>
                        <DayNight/>
                        <Button>Join us</Button>
                    </RightWrapper>
                </Content>
            </Container>
        </Wrapper>
    );
};

Header.propTypes = {
    logo: shape({
        title: string,
        url:   string,
    }),
    nav:  shape({
        items: arrayOf(shape({})),
    }),
};

Header.defaultProps = {
    logo: {},
    nav:  {},
};

export default Header;
