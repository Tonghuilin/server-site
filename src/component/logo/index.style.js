import styled  from '@emotion/styled';
import { Img } from '../style/typography';

export const Wrapper = styled.div(({ width, height, theme }) => ({
    width:  theme.pxToRem(width),
    height: theme.pxToRem(height),
}));

export const Image = styled(Img)``;
