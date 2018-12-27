import Styled                                  from '@emotion/styled';
import { Container as BaseContainer, H4, Img } from '../typography';

export const Wrapper = Styled.div(({ theme, backgroundColor }) => ({
    backgroundColor,
    marginBottom: theme.pxToRem(50),
}));

export const Container = Styled(BaseContainer)(
    ({ vertical, reverse, fullWidth }) => (vertical ? {
        padding: fullWidth ? 0 : undefined,
    } : {
        display:        'flex',
        flexDirection:  reverse ? 'row-reverse' : undefined,
        justifyContent: 'space-between',
    }),
);

export const ImageWrapper = Styled.div(
    ({ vertical, reverse, imageBackgroundColor, theme }) => (vertical ? {
        backgroundColor: imageBackgroundColor,
        width:           '100%',
        height:          vertical ? theme.pxToRem(300) : 'auto',
        overflow:        'hidden',
        position:        'relative',
    } : {
        flexBasis:   '50%',
        flexShrink:  0,
        marginRight: reverse ? undefined : theme.pxToRem(16),
        marginLeft:  reverse ? theme.pxToRem(16) : undefined,
    }),
);

export const TextWrapper = Styled.div(
    ({ vertical, reverse, textBackgroundColor, theme }) => {
        const shared = {
            backgroundColor: textBackgroundColor,
        };

        return vertical ? {
            ...shared,
            width:     '100%',
            textAlign: 'center',
            padding:   theme.pxToRem(30),
        } : {
            ...shared,
            flexBasis: '100%',
            textAlign: reverse ? 'left' : 'right',
        };
    },
);

export const Title = Styled(H4)`
    margin: 1rem 0;
`;

export const Body = Styled.div`
    font-weight: 100;
`;

export const Image = Styled(Img)(
    ({ vertical }) => (vertical ? {
        position:  'absolute',
        top:       '50%',
        left:      '50%',
        transform: 'translate(-50%, -50%)',
    } : {}),
);
