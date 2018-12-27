import styled from '@emotion/styled';

export const Wrapper = styled.div(({ theme, mode }) => ({
    display: /^(inline)/.test(mode) ? 'inline-block' : 'block',
    margin:  `${theme.pxToRem(5)} 0`,
}));

export const InputWrapper = styled.div(({ theme, mode }) => ({
    borderBottom: `${theme.pxToRem(2)} solid ${theme.borderColor.input}`,
    display:      /^(inline)/.test(mode) ? 'inline-block' : 'block',
    fontSize:     'larger',
    margin:       `0 ${theme.pxToRem(5)}`,
    padding:      `${theme.pxToRem(3)} ${theme.pxToRem(6)}`,
}));


export const Label = styled.label`
`;

export const Input = styled.input`
    border: none;
    width: 100%;
    font-size: inherit;
`;
