import { BrowserRouter } from 'react-router-dom'
import { Route, Switch } from 'react-router'
import { Home } from './Home'
import { FourOhFour } from './FourOhFour'
import React from 'react'
import {RestaurantDetails} from "./restaurant-details/restaurant-details";
import { RestaurantListings } from "./restaurant-listings/restaurant-listings";
import { RestaurantHome} from "./restaurant-home/restaurant-home";

export const App = () => (
    <>
        <BrowserRouter>
            <Switch>
                <Route exact path="/restaurant-details" component={RestaurantDetails}/>
                <Route exact path="/restaurant-listings" component={RestaurantListings}/>
                <Route exact path="/restaurant-home" component={RestaurantHome}/>
                <Route exact path='/' component={Home} />
                <Route component={FourOhFour} />
            </Switch>
        </BrowserRouter>

    </>
)