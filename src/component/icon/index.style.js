import styled      from '@emotion/styled';

export const Svg = styled.svg(({ theme, width, height, fill }) => ({
    width:  theme.pxToRem(width),
    height: theme.pxToRem(height),
    fill:   fill || theme.color.icon,
}));
