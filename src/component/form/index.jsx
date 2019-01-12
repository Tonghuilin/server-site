import React                           from 'react';
import { string, func }                from 'prop-types';
import { ButtonWrapper, SubmitButton } from './index.style';

const Form = ({ method, action, children, onSubmit, submitText }) => {
    return (
        <form method={method} action={action} onSubmit={onSubmit}>
            {children}

            <ButtonWrapper>
                <SubmitButton type="submit" aria-label="form submit button">
                    {submitText}
                </SubmitButton>
            </ButtonWrapper>
        </form>
    );
};

Form.propTypes = {
    method:     string,
    action:     string,
    onSubmit:   func,
    submitText: string,
};

Form.defaultProps = {
    method:     'GET',
    action:     '/',
    submitText: 'submit',

};

export default Form;
