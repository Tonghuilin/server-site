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
            label:       '我叫',
            placeholder: '名字',
            mode:        'inline-lite',
            onChange:    () => {
            },
        },
        {
            id:          'wechat',
            label:       ', 我的微信是',
            placeholder: '微信号',
            mode:        'inline-lite',
            onChange:    () => {
            },
        },
        {
            id:          'qq',
            label:       ', 我的QQ是',
            placeholder: 'QQ号',
            mode:        'inline-lite',
            onChange:    () => {
            },
        },
        {
            id:          'phone',
            label:       '，我的电话是',
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
