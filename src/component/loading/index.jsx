import React from 'react';
import { string } from 'prop-types';

const Loading = ({ color }) => {
    return (
        <div>
            Loading
        </div>
    );
};

Loading.propTypes = {
    color: string,
};

export default Loading;
