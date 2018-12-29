import React             from 'react';
import { string, func }  from 'prop-types';
import Icon              from '../icon';
import { GlobalContext } from '../index';

import { Button } from './day-night.style';

const DayNight = ({ themeName, setThemeName }) => {
    const name      = themeName === 'dark' ? 'night' : 'day';

    const onClick = (e) => {
        e.preventDefault();

        if (themeName === 'light') {
            return setThemeName('dark');
        }
        return setThemeName('light');
    };

    return (
        <Button onClick={onClick}>
            <Icon name={name} width="100%" height="100%" />
        </Button>
    );
};

DayNight.propTypes = {
    themeName:    string.isRequired,
    setThemeName: func.isRequired,
};

const DayNightWithGlobalContext = () => (
    <GlobalContext.Consumer>
        {(context) => <DayNight {...context} />}
    </GlobalContext.Consumer>
);

export default DayNightWithGlobalContext;
