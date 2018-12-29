import styled      from '@emotion/styled';
import { pxToRem } from '../style/mixin';

export const Svg = styled.svg(({ theme, width, height, fill }) => ({
    width:  pxToRem(width),
    height: pxToRem(height),
    fill:   fill || theme.color.icon,
}));
