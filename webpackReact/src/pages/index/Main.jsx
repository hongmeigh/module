import React from 'react';
import ReactDom from 'react-dom';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
// import injectTapEventPlugin from 'react-tap-event-plugin';
import Index from './Index';
import IndexOne from './IndexOne';

// injectTapEventPlugin();

ReactDom.render((
    <Router>
        <Switch>
            <Route exact path="/index" component={Index}/>
            <Route exact path="/indexone" component={IndexOne}/>
        </Switch>
    </Router>
), document.getElementById('app'));
