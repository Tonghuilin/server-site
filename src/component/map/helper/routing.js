import logger from '../../../helper/logger';

export const getMultiple = (result, getSingleFn, getTotalFn) => {
    if (typeof getSingleFn !== 'function' || typeof getTotalFn !== 'function') {
        logger.log('getSingleFn or getTotalFn is not a valid function');
        return [];
    }

    const total = getTotalFn.call(result);
    if (typeof total !== 'number') {
        logger.log('getTotalFn should return a number');
        return [];
    }

    let multiple = [];
    for (let index = 0; index < total; index++) {
        const single = getSingleFn.call(result, index);
        multiple.push(single);
    }

    return multiple;
};

/**
 * Tree - Level 3 - steps
 * @param route
 * @returns {{distance: *, description: *}[]}
 */
export const getStepsFromRoute = (route) => {
    const steps = getMultiple(route, route.getStep, route.getNumSteps);

    return steps.map((step) => ({
        distance:    step.getDistance(),
        description: step.getDescription(),
    }));
};

/**
 * Tree - Level 2 - routes + steps
 * @param plan
 * @returns {{type: *, distance: *, steps: *}[]}
 */
export const getRoutesStepsFromPlan = (plan) => {
    const routes = getMultiple(plan, plan.getRoute, plan.getNumRoutes);

    return routes.map((route) => ({
        type:     route.getRouteType(),
        distance: route.getDistance(),
        steps:    getStepsFromRoute(route),
    }));
};

/**
 * Level 1 - plans, routes / (lines + routes), steps
 * @param result
 * @returns {{distance: *, duration: *, routes: *}[]}
 */
export const getResultTree = (result) => {
    const plans       = getMultiple(result, result.getPlan, result.getNumPlans);

    return plans.map(
        (plan) => ({
            distance:    plan.getDistance(),
            duration:    plan.getDuration(),
            routes:      getRoutesStepsFromPlan(plan),
            description: plan.getDescription ? plan.getDescription() : '',
        }),
    );
};

/**
 * get routing option
 * @param map
 * @param setRoutePlans
 * @returns {{renderOptions: {map: *}, autoViewpoint: boolean, onSearchComplete: onSearchComplete}}
 */
export const getRoutingOption = ({ map, setRoutePlans }) => ({
    renderOptions:    { map: map },
    autoViewpoint:    true,
    onSearchComplete: (results) => {
        if (JSON.stringify(results) === '{}') {
            setRoutePlans([]);
            return;
        }

        const tree = getResultTree(results);
        setRoutePlans(tree);
    },
});
