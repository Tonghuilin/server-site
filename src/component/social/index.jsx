import React from 'react';
import { string, arrayOf, shape } from 'prop-types';
import { Container, Title, List, Item } from './index.style';

const Social = ({ title, items }) => {
    return (
        <Container>
            <Title>{title}</Title>

            {
                items.length ? (
                    <List>
                        {
                            items.map((props) => (<Item key={props.id} />))
                        }
                    </List>
                ) : null
            }
        </Container>
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
