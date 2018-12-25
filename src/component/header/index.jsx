import React from 'react';
import { string, arrayOf, shape } from 'prop-types';
import { Container, LogoWrapper, Title, RestWrapper } from './index.style';
import Logo from '../logo';

const Header = ({ title, logo, nav }) => {
    return (
        <Container>
            <LogoWrapper>
                <Logo {...logo} />
                <Title>{title}</Title>
            </LogoWrapper>

            <RestWrapper>
                <button>Day/night</button>
                <button>Join us</button>
            </RestWrapper>
        </Container>
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
