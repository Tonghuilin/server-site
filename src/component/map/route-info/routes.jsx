import React                              from 'react';
import { number, string, shape, arrayOf } from 'prop-types';
import Steps                              from './steps';

// styled component
import { RouteList } from './index.style';

const Routes = ({ routes }) => routes.length ? (
    <RouteList>
        {routes.map(
            (route, index) => <Steps key={index} {...route} />,
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
