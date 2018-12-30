import Styled      from '@emotion/styled';
import { pxToRem } from '../style/mixin';
import { Img }     from '../style/styled-component';
import mq          from '../style/mq';

export const Wrapper = Styled.div`
    display:      inline-block;
    height:       ${props => pxToRem(props.height)};
    overflow:     hidden;
    position:     relative;
    width:        ${props => pxToRem(props.width)};
    
    ${mq.tablet} {
        height:       ${({ responsive: { tablet } }) => tablet ? pxToRem(tablet.height) : undefined};
        width:        ${({ responsive: { tablet } }) => tablet ? pxToRem(tablet.width) : undefined};  
    }
    
    ${mq.tabletLandscape} {
        height:       ${({ responsive: { tabletLandscape } }) => tabletLandscape ? pxToRem(tabletLandscape.height) :
    undefined};
        width:        ${({ responsive: { tabletLandscape } }) => tabletLandscape ? pxToRem(tabletLandscape.width) :
    undefined};  
    }
    
    ${mq.desktop} {
        height:       ${({ responsive: { desktop } }) => desktop ? pxToRem(desktop.height) : undefined};
        width:        ${({ responsive: { desktop } }) => desktop ? pxToRem(desktop.width) : undefined};  
    }
`;

export const DefaultIconWrapper = Styled.div`
    background-color: ${props => props.theme.backgroundColor.common};
    height: 100%;
    padding: ${pxToRem(16)};
    width: 100%;

    ${props => props.customStyle}
`;

export const Image = Styled(Img)(({ size }) => {
    const biggerWidth = size ? (size.width > size.height) : false;

    return {
        left:      '50%',
        position:  'absolute',
        top:       '50%',
        transform: 'translate(-50%, -50%)',
        height:    biggerWidth ? '100%' : 'auto',
        width:     biggerWidth ? 'auto' : '100%',
    };
});
