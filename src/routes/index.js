import React from 'react';
import {BrowserRouter as Router , Link, Route} from 'react-router-dom';

import Home from './Home';
import Work from './Work';

export default () => {
    return(
    
    <Router>
     <div>
        <Route exact path="/home" component ={Home} />
        <Route exact path="/" component={Home} />
        <Route path="/work" component={Work} />
     </div>
    </Router>
    )
}