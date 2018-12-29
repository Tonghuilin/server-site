import styled      from '@emotion/styled';
import { pxToRem } from '../style/mixin';

export const Wrapper = styled.div`
    display: ${props => (/^(inline)/.test(props.mode) ? 'inline-block' : 'block')};
    margin: ${pxToRem(5)} 0;
`;

export const InputWrapper = styled.div`
    border-bottom: ${pxToRem(2)} solid ${props => props.theme.borderColor.input};
    display:      ${props => (/^(inline)/.test(props.mode) ? 'inline-block' : 'block')};
    font-size:     larger;
    margin:       0 ${pxToRem(5)};
    padding:      ${pxToRem(3)} ${pxToRem(6)};
`;

export const Label = styled.label(
    ({ labelSsrOnly }) => (labelSsrOnly ? {
        position:   'absolute',
        userSelect: 'none',
    } : {}),
);

export const Input = styled.input`
    background-color: inherit;
    border: none;
    color: inherit;
    font-size: inherit;
    width: 100%;
`;
