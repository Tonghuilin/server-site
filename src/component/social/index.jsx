import React                      from 'react';
import { string, arrayOf, shape } from 'prop-types';
import Icon                       from '../icon';

// styled component
import { Wrapper, Container, Title, List, Item } from './index.style';

const Social = ({ title, items }) => {
    return (
        <Wrapper>
            <Container>
                <Title>{title}</Title>
                {
                    items.length ? (
                        <List>
                            {items.map(({ id, url }) => (
                                <Item href={url} key={id}>
                                    <Icon name={id} width={20} height={20}/>
                                </Item>
                            ))}
                        </List>
                    ) : null
                }
            </Container>
        </Wrapper>
    );
};

Social.propTypes = {
    title: string,
    items: arrayOf(shape({
        id:       string,
        username: string,
        url:      string,
    })),
};

Social.defaultProps = {
    title: '',
    items: [],
};

export default Social;
