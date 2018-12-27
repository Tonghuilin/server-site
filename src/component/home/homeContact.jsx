import React      from 'react';
import { string } from 'prop-types';
import Form       from '../form';
import TextInput  from '../input/textInput';

// styled component
import { Wrapper, Title } from './homeContact.style';
import { Container }      from '../typography';

const HomeContact = ({ title, submitText }) => {
    const onSubmit = () => {
    };

    const inputs = [
        {
            id:          'first-name',
            label:       'I\'m',
            placeholder: 'first name',
            mode:        'inline-lite',
            onChange:    () => {
            },
        },
        {
            id:          'email',
            label:       ', my email is',
            placeholder: 'email address',
            mode:        'inline-lite',
            onChange:    () => {
            },
        },
        {
            id:          'phone',
            label:       'and you can call me on',
            placeholder: '138xxxxxxxx',
            mode:        'inline-lite',
            onChange:    () => {
            },
        },
    ];

    return (
        <Wrapper>
            <Container>
                <Title>{title}</Title>

                <Form onSubmit={onSubmit} submitText={submitText}>
                    {inputs.map((props) => <TextInput key={props.id} {...props} />)}
                </Form>
            </Container>
        </Wrapper>
    );
};

HomeContact.propTypes = {
    title:      string,
    submitText: string,
};

HomeContact.defaultProps = {
    title:      '',
    submitText: '',
};

export default HomeContact;
