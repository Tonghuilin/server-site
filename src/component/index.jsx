import React, { useState } from 'react';
import Home                from './home';

// style
import { ThemeProvider } from 'emotion-theming';
import { Global }        from '@emotion/core';
import getTheme          from '../theme';
import getGlobalStyle    from './index.style';

export const GlobalContext = React.createContext();

const App = (props) => {
    const [themeName, setThemeName] = useState(props.themeName);
    const theme                     = getTheme(themeName);

    // emotion does not support multiple selector in single Global
    const globalStyle   = getGlobalStyle({ theme });
    const globalStyleEl = Object.keys(globalStyle).map(
        (key) => <Global key={`global-style--${key}`} styles={globalStyle[key]}/>,
    );

    const contextValue = {
        themeName,
        setThemeName,
    };

    return (
        <React.Fragment>
            <GlobalContext.Provider value={contextValue}>
                <ThemeProvider theme={theme}>
                    {globalStyleEl}

                    <Home {...props} theme={theme}/>
                </ThemeProvider>
            </GlobalContext.Provider>
        </React.Fragment>
    );
};

export default App;
