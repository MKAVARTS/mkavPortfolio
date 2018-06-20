import React from 'react';
import {BrowserRouter as Router , Link, Route} from 'react-router-dom';

import Home from './Home';
import Work from './Work';
import WorkNew from './WorkNew';

export default () => {
    return(
    <Router>
     <div>
        <Route exact path="/home" component ={Home} />
        <Route exact path="/portfolio" component={Home} />
        <Route path="/work" component={WorkNew} />
     </div>
    </Router>
    )
}