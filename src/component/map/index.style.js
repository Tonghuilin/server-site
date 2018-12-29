import Styled      from '@emotion/styled';
import { pxToRem } from '../style/mixin';

export const Wrapper = Styled.div``;

export const MapWrapper = Styled.div(({ width, height }) => ({
    width:  pxToRem(width),
    height: pxToRem(height),
}));
