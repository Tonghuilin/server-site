import React      from 'react';
import { string } from 'prop-types';

// styled component
import { Container, Content } from '../style/styled-component';
import { Heading }            from './index.style';

const MapTitle = ({ title }) => (
    <Container>
        <Content>
            <Heading>
                {title}
            </Heading>
        </Content>
    </Container>
);

MapTitle.propTypes = {
    title:    string,
};

MapTitle.defaultProps = {
    title:    '',
};

export default MapTitle;
