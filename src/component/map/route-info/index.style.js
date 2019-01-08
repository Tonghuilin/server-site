import Styled                 from '@emotion/styled';
import { Button, SubHeading } from '../../style/styled-component';
import { pxToRem }            from '../../style/mixin';
import vars                   from '../../style/variable';
import mq                     from '../../style/mq';

export const Wrapper = Styled.div``;

export const PlansWrapper = Styled.div`
    position: relative;

    &::after {
        bottom: 0;
        box-shadow: ${pxToRem(0)} ${pxToRem(-13)} ${pxToRem(17)} ${pxToRem(-12)} ${props => props.theme.backgroundColor.common} inset;
        content: '';
        height: ${pxToRem(10)};
        left: 0;
        position: absolute;
        width: 100%;
        z-index: 1;
    }
`;

export const PlanHeadingList = Styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

export const PlanHeading = Styled(Button)`
    flex-basis: ${props => props.onlyPlan ? '100%' : 'calc(20% - 2px)'};
    min-width: ${pxToRem(70)};
    max-width: ${props => props.onlyPlan ? 'none' : pxToRem(180)};
    margin-right: ${props => props.onlyPlan ? undefined : pxToRem(2)};
    margin-bottom: ${props => props.onlyPlan ? undefined : pxToRem(2)};
    padding: ${pxToRem(5)};
    text-align: center;
    
    h6 {
        font-size: inherit;
        margin: 0;
    }

    ${SubHeading} {
        color: inherit;
        display: ${props => props.onlyPlan ? 'inline-block' : 'block'};
        font-size: 0.9em;
        margin-right: ${pxToRem(5)};
    }
`;

export const PlanBodyList = Styled.div`
    max-height: ${pxToRem(300)};
    overflow: auto;
    margin: ${pxToRem(24)} 0;
    position: relative;
`;

export const PlanBody = Styled.div`
    left: 0;
    position: ${props => props.selected ? 'static' : 'absolute'};
    opacity: ${props => props.selected ? 1 : 0};
    top: 0;
    transition: opacity ${vars.transition};
    z-index: -1;
`;

export const RouteList = Styled.div`
`;

export const StepList = Styled.div`
`;

export const StepItem = Styled.div`
    display: flex;
    margin-bottom: ${pxToRem(6)};
`;

export const StepTitle = Styled(SubHeading)`
    flex-basis: ${pxToRem(56)};
    flex-shrink: 0;
    padding-right: ${pxToRem(10)};
    padding-top: ${pxToRem(2)};
    text-align: right;
    
    ${mq.tablet} {
        flex-basis: ${pxToRem(80)};
        padding-right: ${pxToRem(20)};
    }
`;

export const StepBody = Styled.div`
    flex-basis: 100%;
    font-size: ${pxToRem(14)};
`;

export const MixList = Styled.div`
`;
