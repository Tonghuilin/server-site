import Styled                                         from '@emotion/styled';
import { Content as BaseContent, H4, H5, SubHeading } from '../style/styled-component';
import { pxToRem, lighten }                           from '../style/mixin';
import color                                          from '../style/color';
import pathVerticalUrl                                from '../../asset/path-vertical.png';
import pathUrl                                        from '../../asset/path.png';
import mq                                             from '../style/mq';

export const Wrapper = Styled.div`
    background-color: ${props => props.theme.backgroundColor.banner};
    padding: ${pxToRem(16)} 0 ${pxToRem(24)};
    
    ${mq.tabletLandscape} {
        padding: ${pxToRem(30)} 0;
    }
`;

export const Title = Styled(H4)`
    text-align: center;
`;

export const SubTitle = Styled(SubHeading)`
    text-align: center;
`;

export const Content = Styled(BaseContent)`

    #path-head-tablet-landscape {
        display: none;
    }
    
    #path-tail-tablet-landscape {
        display: none;
    }
    
    ${mq.tabletLandscape} {
        #path-head-mobile {
            display: none;
        }

        #path-head-tablet-landscape {
            display: flex;
            justify-content: center;
        }
        
        #path-tail-mobile {
            display: none;
        }

        #path-tail-tablet-landscape {
            display: flex;
            justify-content: center;
            flex-direction: ${props => props.tailIsReverse ? 'row-reverse' : undefined}
        }
    }
`;

export const PathHead = Styled.div`
    color: ${color.cadet};
    transform: translate(${pxToRem(-20)}, ${pxToRem(8)});
    
    ${mq.tabletLandscape} {
        transform: translate(${pxToRem(-21)}, 0);
    }
`;

export const PathTail = Styled.div`
    color: ${color.cadet};
    display: flex;
    
    ${mq.tabletLandscape} {
        align-items: baseline;
        transform: translate(${props => props.isReverse ? pxToRem(-78) : pxToRem(78)}, ${pxToRem(-56)});
    }
`;

export const PathTailBody = Styled.div`
    background-image: url(${pathUrl});
    background-position: 0 ${pxToRem(20)};
    background-repeat: repeat no-repeat;
    background-size: ${pxToRem(40)};
    display: flex;
    justify-content: center;
    flex-basis: 100%;
    position: relative;
    
    svg {
        position: absolute;
        top: ${pxToRem(-46)};
    }
    
    ${mq.tabletLandscape} {
        background-position: center left;
        background-size: ${pxToRem(80)};
        flex-basis: ${pxToRem(240)};
        height: ${pxToRem(80)};
        transform: ${props => props.isReverse ? 'scale(-1, 1)' : undefined};
    }
`;

export const PathTailEnd = Styled.div`
    color: ${color.cadet};
    transform: translateY(${pxToRem(1.8)});
    
    ${mq.tabletLandscape} {
        transform: translateY(${pxToRem(44)}) ${props => props.isReverse ? 'scale(-1, 1)' : undefined};
    }
`;

export const CourseWrapper = Styled.div`
    background-image: url(${pathVerticalUrl});
    background-repeat: no-repeat repeat;
    background-size: ${pxToRem(40)};
    flex-basis: 100%;
    padding: ${pxToRem(8)} 0 ${pxToRem(20)} ${pxToRem(40)};
    
    ${mq.tabletLandscape} {
        background-image: none;
        display: flex;
        flex-direction: column;
        margin-top: ${pxToRem(-52)};
        padding-left: 0;
    }
`;

export const CourseItem = Styled.div`
    margin: ${pxToRem(14)} 0;
    position: relative;
    
    ${mq.tabletLandscape} {
        align-self: ${props => props.index % 2 === 0 ? 'flex-end' : 'flex-start'};
        flex-basis: ${pxToRem(132)};
        width: 33%;
    }
`;

export const CoursePathSegment = Styled.div`
    color: ${color.cadet};
    display: none;
    
    ${mq.tabletLandscape} {
        align-items: baseline;
        display: flex;
        flex-direction: ${props => props.index % 2 === 0 ? 'row-reverse' : undefined};
        position: absolute;
        left: ${props => props.index % 2 === 0 ? pxToRem(-195) : undefined};
        right: ${props => props.index % 2 === 0 ? undefined : pxToRem(-195)};
        top: ${pxToRem(-50)};
    }
`;

export const CourseMarkerWrapper = Styled.div`
    position: absolute;
    left: ${pxToRem(-45)};
    
    ${mq.tabletLandscape} {
        left: ${props => props.index % 2 === 0 ? pxToRem(-65) : 'auto'};
        right: ${props => props.index % 2 === 0 ? 'auto' : pxToRem(-65)};
    }
    
    &::before {
        background-color: ${props => props.theme.backgroundColor.common};
        border-radius: 50%;
        content: '';
        height: ${pxToRem(40)};
        left: ${pxToRem(5)};
        top: ${pxToRem(5)};
        position: absolute;
        width: ${pxToRem(40)};   
    }
    
    &::after {
        content: '';
        background: ${lighten(color.dune, 0.3)};
        border-radius: 50%;
        bottom: ${pxToRem(-5)};
        height: ${pxToRem(15)};
        left: ${pxToRem(10)};
        position: absolute;
        width: ${pxToRem(30)};
        z-index: 0;
    }
    
    svg {
        position: relative;
        z-index: 1;
    }
`;

export const CourseTextWrapper = Styled.div`
    background-color: ${props => props.theme.backgroundColor.common};
    border-radius: ${pxToRem(5)};
    margin-left: ${pxToRem(20)};
    padding: ${pxToRem(16)};
    position: relative;
    
    &::before {
        background-color: inherit;
        content: '';
        height: ${pxToRem(20)};
        left: ${pxToRem(-4)};
        position: absolute;
        top: ${pxToRem(10)};
        transform: rotate(-45deg);
        width: ${pxToRem(20)};
    }
    
    ${mq.tabletLandscape} {
        margin: 0;
        position: absolute;
        width: 100%;

        &::before {
            left: ${props => props.index % 2 === 0 ? undefined : 'auto'};
            right: ${props => props.index % 2 === 0 ? undefined : pxToRem(-4)};
        }
    }
`;

export const CourseTitle = Styled(H5)`
    margin: 0;
    position: relative;
`;

export const CourseBody = Styled.div`
    font-size: 0.9rem;
`;
