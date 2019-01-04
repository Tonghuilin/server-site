import React                      from 'react';
import { arrayOf, shape, string } from 'prop-types';

// styled component
import { StepList, StepItem, StepTitle, StepBody } from './index.style';

export const SingleStep = ({ distance, description }) => {
    return description ? (
        <StepItem>
            <StepTitle>{distance}</StepTitle>

            <StepBody dangerouslySetInnerHTML={{ __html: description }}/>
        </StepItem>
    ) : null;
};

SingleStep.propTypes = {
    distance:    string,
    description: string,
};


const Steps = ({ steps }) => {
    if (!steps.length) {
        return null;
    }

    return (
        <StepList>
            {steps.map(
                (step, index) => <SingleStep key={index} {...step} />,
            )}
        </StepList>
    );
};

Steps.propTypes = {
    steps: arrayOf(shape({})),
};

Steps.defaultProps = {
    steps: [],
};

export default Steps;
