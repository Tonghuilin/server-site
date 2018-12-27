import Styled  from '@emotion/styled';
import { Img } from '../typography';

export const Wrapper = Styled.div(({ theme, width, height, color, isDefault }) => ({
    border:       `${theme.pxToRem(10)} solid ${color || theme.borderColor.common}`,
    borderRadius: '50%',
    display:      'inline-block',
    height:       theme.pxToRem(height),
    overflow:     'hidden',
    padding:      isDefault ? theme.pxToRem(12) : undefined,
    position:     'relative',
    width:        theme.pxToRem(width),
}));

export const Image = Styled(Img)(({ size }) => {
    const biggerWidth = size.width > size.height;

    return {
        left:      '50%',
        position:  'absolute',
        top:       '50%',
        transform: 'translate(-50%, -50%)',
        height:    biggerWidth ? '100%' : 'auto',
        width:     biggerWidth ? 'auto' : '100%',
    };
});
