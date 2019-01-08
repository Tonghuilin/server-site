import React         from 'react';
import { string }    from 'prop-types';
import Form          from './index';
import { TextInput } from '../input';

// styled component
import { Wrapper, Title, Row } from './contactForm.style';
import { Container, Content }  from '../style/styled-component';

const ContactForm = ({ title, submitText }) => {
    const onSubmit = () => {
    };

    const inputs = [
        {
            id:     'first-name',
            label:  '名字',
            mode:   'lite',
            before: '我叫',
            after:  '，',
        },
        {
            id:     'school',
            label:  '学校',
            mode:   'lite',
            before: '我在',
            after:  '上学，',
        },
        {
            id:     'campus',
            label:  '校区',
            mode:   'lite',
            before: '我想报名',
            after:  '。',
        },
        {
            id:     'wechat',
            label:  '微信',
            mode:   'lite',
            before: '联系我可以用',
            after:  '，',
        },
        {
            id:     'phone',
            label:  '电话',
            mode:   'lite',
            before: '或者',
            after:  '，',
        },
        {
            id:     'qq',
            label:  'QQ',
            mode:   'lite',
            before: '',
            after:  '。',
        },
    ];

    return (
        <Wrapper>
            <Container>
                <Content>
                    <Title>{title}</Title>

                    <Form onSubmit={onSubmit} submitText={submitText}>
                        {inputs.map((props) => {
                            const onChange = (evt) => {
                                console.log(evt.target.value);
                            };

                            return (
                                <Row key={props.id}>
                                    {props.before}
                                    <TextInput key={props.id} {...props} onChange={onChange}/>
                                    {props.after}
                                </Row>
                            );
                        })}
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
