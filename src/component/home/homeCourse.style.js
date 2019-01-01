import Styled                         from '@emotion/styled';
import { Content as BaseContent, H5 } from '../style/styled-component';
import { pxToRem, lighten }           from '../style/mixin';
import color                          from '../style/color';
import pathVerticalUrl                from '../../asset/path-vertical.png';
import pathUrl                        from '../../asset/path.png';

export const Wrapper = Styled.div`
    background-color: ${props => props.theme.backgroundColor.banner};
    padding: ${pxToRem(30)} 0;
`;

export const Content = Styled(BaseContent)`
`;

export const PathHead = Styled.div`
    transform: translateX(-${pxToRem(20)});
`;

export const PathTail = Styled.div`
    display: flex;
`;

export const PathTailBody = Styled.div`
    background-image: url(${pathUrl});
    background-position: center left;
    background-repeat-y: no-repeat;
    background-size: ${pxToRem(40)};
    display: flex;
    justify-content: center;
    flex-basis: 100%;
    position: relative;
    
    svg {
        position: absolute;
        top: ${pxToRem(-46)};
    }
`;

export const CourseWrapper = Styled.div`
    background-image: url(${pathVerticalUrl});
    background-repeat-x: no-repeat;
    background-size: ${pxToRem(40)};
    flex-basis: 100%;
    padding: ${pxToRem(8)} 0 ${pxToRem(20)} ${pxToRem(40)};
`;

export const CourseItem = Styled.div`
    margin: ${pxToRem(14)} 0;
    position: relative;
`;

export const CourseMarkerWrapper = Styled.div`
    position: absolute;
    left: ${pxToRem(-45)};
    
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
`;

export const CourseTitle = Styled(H5)`
    margin: 0;
    position: relative;
`;

export const CourseBody = Styled.div`
    
`;
