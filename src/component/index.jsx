import React             from 'react';
import Home              from './home';
import { ThemeProvider } from 'emotion-theming';
import Theme         from '../theme';

const App = (props) => (
    <React.Fragment>
        <ThemeProvider theme={Theme[props.theme]}>
            <Home {...props} />
        </ThemeProvider>
    </React.Fragment>
);

export default App;
