import styled                   from '@emotion/styled';
import { pxToRem, rgba }        from '../../style/mixin';
import vars                     from '../../style/variable';
import { Button as CopyButton } from '../../smart-button/copyButton.style';

export const Wrapper = styled.div`
    margin: ${pxToRem(5)};
    padding-top: ${props => props.mode === 'lite' ? pxToRem(12) : undefined};
    padding-right: ${props => props.tool.length ? '2rem' : undefined};
    position: relative;

    ${CopyButton} {
        bottom: 0;
        position: absolute;
        right: 0;
    }
`;

export const InputWrapper = styled.div`
    border-bottom: ${pxToRem(1)} solid ${props => rgba(props.theme.borderColor.input, 0.1)};
    display: ${props => props.mode === 'inline' ? 'inline-block' : 'block'};
    font-size: larger;
    padding: ${pxToRem(3)} ${pxToRem(6)};
`;

export const Label = styled.label`
    display: ${props => props.mode === 'inline' ? 'inline-block' : 'block'};
`;

export const Input = styled.input`
    background-color: inherit;
    border: none;
    color: inherit;
    font-size: inherit;
    padding: 0;
    width: 100%;
    
    & + ${Label} {
        color: ${props => rgba(props.theme.color.common, 0.7)};
        font-size: ${props => props.value ? 'xx-small' : 'smaller'};
        left: ${pxToRem(12)};
        position: absolute;
        top: ${props => props.value ? 0 : '1rem'};
        transition: font-size ${vars.transition}, top ${vars.transition};
        user-select: none;
    }
    
    &:focus + ${Label} {
        font-size: xx-small;
        top: 0;
    }
`;
