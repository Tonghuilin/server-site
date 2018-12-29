import React                                   from 'react';
import { string, func, bool, oneOf }           from 'prop-types';
import { Wrapper, InputWrapper, Label, Input } from './textInput.style';
import { COMP_NAME, MODE }                     from './const';

const TextInput = ({ mode, id, type, name, label, labelSsrOnly, placeholder, onChange, onValidate, value, errMsg }) => {
    const isValid = onValidate(value);

    return (
        <Wrapper mode={mode}>
            <Label mode={mode} htmlFor={id} labelSsrOnly={labelSsrOnly}>{label}</Label>

            <InputWrapper mode={mode}>
                <Input type={type} id={id} name={name || id} placeholder={placeholder} value={value}
                       onChange={onChange}/>
            </InputWrapper>

            {!isValid ? <Error mode={mode}>{errMsg}</Error> : null}
        </Wrapper>
    );
};

TextInput.propTypes = {
    mode:         oneOf(MODE),
    id:           string.isRequired,
    type:         string,
    name:         string,
    label:        string,
    labelSsrOnly: bool,
    placeholder:  string,
    onChange:     func.isRequired,
    onValidate:   func,
    value:        string,
    errMsg:       string,
};

TextInput.defaultProps = {
    mode:         'std',
    type:         'text',
    name:         '',
    label:        '',
    labelSsrOnly: false,
    placeholder:  '',
    onValidate:   () => true,
    value:        '',
    errMsg:       'invalid',
};

TextInput.displayName = COMP_NAME;

export default TextInput;
