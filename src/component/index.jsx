import React from 'react';
import Home from './home';

const App = () => (<React.Fragment><Home {...{ title: 'Hello', name: 'me' }} /></React.Fragment>);

export default App;
