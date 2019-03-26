import React from 'react';
import { Route, Switch } from 'react-router-dom';


//Components
import App from './App';
import Principal from './Principal';
import opcion2 from './Opcion2';
import opcion3 from './Opcion3';



const AppRoutes = () =>

<App>
    <Switch>
        <Route exact path="/Principal" component = {Opcion1} />
        <Route exact path="/Opcion2" component = {Opcion2} />
        <Route exact path="/Opcion3" component = {Opcion3} />
    </Switch>
</App>;

export default AppRoutes;