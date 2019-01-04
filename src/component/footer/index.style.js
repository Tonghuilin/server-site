import Styled      from '@emotion/styled';
import { pxToRem } from '../style/mixin';

export const Footer = Styled.footer`
    padding: ${pxToRem(25)};
`;

export const CopyRightWrapper = Styled.div`
    font-weight: 100;
    font-size: smaller;
    font-style: italic;
    text-align: center;
`;
