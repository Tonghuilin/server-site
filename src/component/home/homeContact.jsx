import React from 'react';
import { string } from 'prop-types';
import { Container, Title } from './homeContact.style';
import Form from '../form';
import TextInput from '../input/textInput';

const HomeContact = ({ title, submitText }) => {
    const onSubmit = () => {};

    const inputs = [
        {
            id: 'first-name',
            label: 'I\'m',
            placeholder: 'first name',
            inline: true,
            onChange: () => {},
        },
        {
            id: 'email',
            label: ', my email is',
            placeholder: 'email address',
            inline: true,
            onChange: () => {},
        },
        {
            id: 'phone',
            label: 'and you can call me on',
            placeholder: '138xxxxxxxx',
            inline: true,
            onChange: () => {},
        },
    ];

    return (
        <Container>
            <Title>{title}</Title>

            <Form onSubmit={onSubmit} submitText={submitText}>
                {inputs.map((props) => <TextInput key={props.id} {...props} />)}
            </Form>
        </Container>
    );
};

HomeContact.propTypes = {
    title:      string,
    submitText: string,
};

HomeContact.defaultProps = {
    title: '',
    submitText: '',
};

export default HomeContact;
