import Styled  from '@emotion/styled';

export const Wrapper = Styled.div``;

export const MapWrapper = Styled.div(({ theme, width, height }) => ({
    width:  theme.pxToRem(width),
    height: theme.pxToRem(height),
}));
