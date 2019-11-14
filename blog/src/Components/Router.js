import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Front from '../Container/Front/Front';
import Admin from '../Container/Admin/Admin';
import '../index.css';

const BasicRoute = () => (
    <Router>
        <div>
            <Switch>
                <Route path='/admin' component={Admin} />
                <Route component={Front} />
            </Switch>
        </div>
    </Router>
);

export default BasicRoute;