import styled      from '@emotion/styled';
import { Img }     from '../typography';

export const Container = styled.div(({ width, height, theme }) => ({
    width:  theme.pxToRem(width),
    height: theme.pxToRem(height),
}));

export const Image = styled(Img)``;
