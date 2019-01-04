import Styled                     from '@emotion/styled';
import { Content as BaseContent } from '../../style/styled-component';

export const Wrapper = Styled.div`
    background-color: ${props => props.theme.backgroundColor.banner};
`;

export const Content = Styled(BaseContent)`
    display: flex;
    justify-content: center;
`;
