import React                              from 'react';
import { number, string, shape, arrayOf } from 'prop-types';
import Steps                              from './steps';

// styled component
import { RouteList } from './index.style';

export const SingleRoute = ({ distance, duration, steps }) => {
    return (
        <div>
            <Steps steps={steps}/>
        </div>
    );
};

SingleRoute.propTypes = {
    distance: string,
    duration: string,
    steps:    arrayOf(shape({})),
};

SingleRoute.defaultProps = {
    distance: '',
    duration: '',
    steps:    [],
};


const Routes = ({ routes }) => routes.length ? (
    <RouteList>
        {routes.map(
            (route, index) => <SingleRoute key={index} {...route} />,
        )}
    </RouteList>
) : null;

Routes.propTypes = {
    routes: arrayOf(shape({})),
};

Routes.defaultProps = {
    routes: [],
};

export default Routes;
