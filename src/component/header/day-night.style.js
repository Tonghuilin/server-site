import Styled            from '@emotion/styled';
import { ReverseButton } from '../style/styled-component';
import { pxToRem }       from '../style/mixin';
import mq                from '../style/mq';

export const Button = Styled(ReverseButton)`
    height: 100%;
    padding: ${pxToRem(16)};
    width: ${pxToRem(60)};

    ${mq.tablet} {
        padding: ${pxToRem(24)};
        width: ${pxToRem(90)};
    }
`;
