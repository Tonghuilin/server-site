import React, { useState, useEffect }                 from 'react';
import { string, shape, arrayOf, number, bool, func } from 'prop-types';
import Routes                                         from './routes';
import { MapContext }                                 from '../index';

// styled component
import { H6, SubHeading } from '../../style/styled-component';
import {
    PlansWrapper, PlanHeadingList, PlanHeading, PlanBodyList, PlanBody,
}                         from './index.style';

// constants
const INDEX = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十'];

export const PlanContent = ({ routes, description, selected }) => {
    const routesEl = routes.length ? <Routes routes={routes}/> : null;

    return (
        <PlanBody selected={selected}>
            {Boolean(description) ? <span dangerouslySetInnerHTML={{ __html: description }}/> : routesEl}
        </PlanBody>
    );
};

PlanContent.propTypes = {
    routes:   arrayOf(shape({})),
    selected: bool,
};

PlanContent.defaultProps = {
    routes:   [],
    selected: false,
};


const PlanTitle = ({ distance, duration, onlyPlan, index, tabIndex, setTabIndex }) => {
    const onClick  = (evt) => {
        evt.preventDefault();
        setTabIndex(index);
    };
    const selected = tabIndex === index;

    return (
        <PlanHeading onClick={onClick} selected={selected} onlyPlan={onlyPlan}>
            <H6>
                方案
                {onlyPlan ? '' : INDEX[index]}
            </H6>

            <SubHeading>{distance}</SubHeading>
            <SubHeading>{duration}</SubHeading>
        </PlanHeading>
    );
};

PlanTitle.propTypes = {
    onlyPlan:    bool,
    index:       number.isRequired,
    distance:    string,
    duration:    string,
    tabIndex:    number.isRequired,
    setTabIndex: func.isRequired,
};

PlanTitle.defaultProps = {
    onlyPlan: false,
    distance: '',
    duration: '',
};

// show as tabs
const Plans = ({ startPoint, routeMode, plans, noPlanMessage }) => {
    const [tabIndex, setTabIndex] = useState(0);

    // reset tabIndex after routeMode updated
    useEffect(() => {
        setTabIndex(0);
    }, [routeMode]);

    if (!plans.length && startPoint && noPlanMessage) {
        return <p>{noPlanMessage}</p>;
    }

    return (
        <PlansWrapper>
            <PlanHeadingList>
                {plans.map((plan, ind) => (
                    <PlanTitle
                        {...plan}
                        key={ind}
                        index={ind}
                        onlyPlan={plans.length <= 1}
                        tabIndex={tabIndex}
                        setTabIndex={setTabIndex}
                    />
                ))}
            </PlanHeadingList>

            <PlanBodyList>
                {plans.map((plan, ind) => (
                    <PlanContent
                        key={ind}
                        {...plan}
                        selected={tabIndex === ind}
                    />
                ))}
            </PlanBodyList>
        </PlansWrapper>
    );
};

Plans.propTypes = {
    routeMode:     string,
    startPoint:    shape({}),
    plans:         arrayOf(shape({})),
    noPlanMessage: string,
};

Plans.defaultProps = {
    routeMode:     '',
    plans:         [],
    startPoint:    undefined,
    noPlanMessage: '',
};


const PlansWithMapContext = (props) => (
    <MapContext.Consumer>
        {({ startPoint, routeMode }) => <Plans {...props} routeMode={routeMode} startPoint={startPoint}/>}
    </MapContext.Consumer>
);

export default PlansWithMapContext;
