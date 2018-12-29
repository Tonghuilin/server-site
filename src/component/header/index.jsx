import React                      from 'react';
import { string, arrayOf, shape } from 'prop-types';
import Logo                       from '../logo';
import DayNight                   from './day-night';

// styled component
import { Wrapper, Container, LeftWrapper, RightWrapper, Title } from './index.style';
import { Button }                                               from '../style/typography';

const Header = ({ title, logo, nav }) => {
    return (
        <Wrapper>
            <Container>
                <LeftWrapper>
                    <Logo {...logo} />
                    <Title>{title}</Title>
                </LeftWrapper>

                <RightWrapper>
                    <DayNight/>
                    <Button>Join us</Button>
                </RightWrapper>
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
