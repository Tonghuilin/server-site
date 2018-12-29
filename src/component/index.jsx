import React, { useState } from 'react';
import Home                from './home';

// style
import { ThemeProvider } from 'emotion-theming';
import { Global }        from '@emotion/core';
import { getTheme }      from './style';

export const GlobalContext = React.createContext();

/**
 * output multiple <Global />, because emotion.js does not support multiple selectors in single <Global />,
 *
 * @param styles
 * @returns {any[]}
 * @constructor
 */
const GlobalStyle = ({ styles }) => Object.keys(styles).map(
    (key) => <Global key={`global-style--${key}`} styles={styles[key]}/>,
);

const App = (props) => {
    const [themeName, setThemeName] = useState(props.themeName);
    const { theme, global }         = getTheme(themeName);

    const contextValue = {
        themeName,
        setThemeName,
    };

    return (
        <React.Fragment>
            <GlobalContext.Provider value={contextValue}>
                <ThemeProvider theme={theme}>
                    <GlobalStyle styles={global}/>

                    <Home {...props} theme={theme}/>
                </ThemeProvider>
            </GlobalContext.Provider>
        </React.Fragment>
    );
};

export default App;
