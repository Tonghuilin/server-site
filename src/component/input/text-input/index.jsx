import React                                         from 'react';
import { string, func, bool, oneOf, shape, arrayOf } from 'prop-types';
import { TEXT_INPUT_MODE, TEXT_INPUT_TOOL }          from '../const';
import { CopyButton }                                from '../../smart-button';

// styled component
import { Wrapper, InputWrapper, Label, Input } from './index.style';

const TextInput = ({
    mode,
    label, labelSsrOnly,
    id, type, name, placeholder, disabled, onChange, value,
    onValidate, errMsg,
    tool,
}) => {
    const isValid = onValidate(value);
    const labelEl = <Label mode={mode} htmlFor={id} labelSsrOnly={labelSsrOnly}>{label}</Label>;

    return (
        <Wrapper mode={mode} tool={tool}>
            {mode !== 'lite' && labelEl}

            <InputWrapper mode={mode}>
                <Input
                    type={type}
                    id={id}
                    name={name || id}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    disabled={disabled}
                    autoComplete="off"
                />
                { mode === 'lite' && labelEl }

                { tool.indexOf('copy') > -1 && <CopyButton value={value}/> }
            </InputWrapper>

            {!isValid ? <Error mode={mode}>{errMsg}</Error> : null}
        </Wrapper>
    );
};

TextInput.propTypes = {
    mode: oneOf(TEXT_INPUT_MODE),

    // label
    label:        string,
    labelSsrOnly: bool,

    // input
    id:          string.isRequired,
    type:        string,
    name:        string,
    placeholder: string,
    disabled:    bool,
    onChange:    func.isRequired,
    value:       string,

    // validation
    onValidate: func,
    errMsg:     string,

    // tool
    tool: arrayOf(oneOf(TEXT_INPUT_TOOL)),
};

TextInput.defaultProps = {
    mode:         'std',
    label:        '',
    labelSsrOnly: false,
    type:         'text',
    name:         '',
    placeholder:  '',
    disabled:     false,
    value:        '',
    onValidate:   () => true,
    errMsg:       'invalid',
    tool:         [],
};

export default TextInput;
