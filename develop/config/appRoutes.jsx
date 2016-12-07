import React from 'react';
import { Route, IndexRedirect } from 'react-router';

import App from '../containers/App.jsx';
import Layout from '../containers/Layout/Layout.container.js';

export default (
    <Route path="/" component={App}>
        <IndexRedirect to="App" />

        <Route path="App" component={Layout} />
    </Route>
);
