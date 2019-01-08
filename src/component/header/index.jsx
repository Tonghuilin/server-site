import React                      from 'react';
import { string, arrayOf, shape } from 'prop-types';
import Logo                       from '../logo';
import DayNight                   from './day-night';

// styled component
import { Content, Wrapper, LeftWrapper, RightWrapper, Title, BLink } from './index.style';
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

                        <BLink href="#home-section-home-contact-us">
                            联系我们
                        </BLink>
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
