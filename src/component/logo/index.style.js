import Styled      from '@emotion/styled';
import { Img }     from '../style/styled-component';
import { pxToRem } from '../style/mixin';

export const Wrapper = Styled.div`
    height:  ${props => pxToRem(props.height)};
    width:  ${props => pxToRem(props.width)};
`;

export const Image = Styled(Img)`
    height:  ${props => pxToRem(props.height)};
    width:  ${props => pxToRem(props.width)};
`;
