import React      from 'react';
import { string } from 'prop-types';
import Form       from './index';
import TextInput  from '../input/textInput';

// styled component
import { Wrapper, Title }     from './contactForm.style';
import { Container, Content } from '../style/styled-component';

const ContactForm = ({ title, submitText }) => {
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
                <Content>
                    <Title>{title}</Title>

                    <Form onSubmit={onSubmit} submitText={submitText}>
                        {inputs.map((props) => <TextInput key={props.id} {...props} />)}
                    </Form>
                </Content>
            </Container>
        </Wrapper>
    );
};

ContactForm.propTypes = {
    title:      string,
    submitText: string,
};

ContactForm.defaultProps = {
    title:      '',
    submitText: '',
};

export default ContactForm;
