import styled      from '@emotion/styled';
import { pxToRem } from '../style/mixin';
import mq          from '../style/mq';

export const Svg = styled.svg`
    fill:   ${props => props.fill || props.theme.color.icon};
    width:  ${props => pxToRem(props.width)};
    height: ${props => pxToRem(props.height)};
    
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
