import React                              from 'react';
import { arrayOf, shape, string, number } from 'prop-types';
import Place                              from './place';

// styled component
import { Container, Content }     from '../../style/styled-component';
import { Wrapper, Heading, List } from './index.style';

const RouteTo = ({ title, collections }) => {
    if (!collections.length) {
        return null;
    }

    return (
        <Wrapper>
            <Container>
                <Content>
                    {Boolean(title) && <Heading>{title}</Heading>}

                    <List>
                        {collections.map((item, index) => <Place key={index} {...item} />)}
                    </List>
                </Content>
            </Container>
        </Wrapper>
    );
};

RouteTo.propTypes = {
    title:       string,
    collections: arrayOf(shape({})),
};

RouteTo.defaultProps = {
    title:       '',
    collections: [],
};

export default RouteTo;
