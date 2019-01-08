import React                      from 'react';
import { string, arrayOf, shape } from 'prop-types';
import { QrButton }               from '../smart-button';

// styled component
import { Wrapper, Container, Title, List, Item } from './index.style';

const SocialItem = ({ id, url, qrCodeUrl }) => {
    return (
        <Item>
            <QrButton iconName={id} url={qrCodeUrl} reverse={false} />
        </Item>
    );
};

const Social = ({ title, items }) => {
    if (!items.length) {
        return null;
    }

    return (
        <Wrapper>
            <Container>
                <Title>{title}</Title>
                {
                    items.length ? (
                        <List>
                            {items.map(props => (
                                <SocialItem key={props.id} {...props} />
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
        id:        string,
        username:  string,
        url:       string,
        qrCodeUrl: string,
    })),
};

Social.defaultProps = {
    title: '',
    items: [],
};

export default Social;
