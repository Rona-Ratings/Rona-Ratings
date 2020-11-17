import { BrowserRouter } from 'react-router-dom'
import { Route, Switch } from 'react-router'
import { Home } from './Home'
import { FourOhFour } from './FourOhFour'
import React from 'react'
import {DetailRestaurant} from "./DetailRestaurant/DetailRestaurant";
import { ListingPage } from "./ListingsPage/ListingPage";
import { FrontPage} from "./FrontPage/FrontPage";

export const App = () => (
    <>
        <BrowserRouter>
            <Switch>
                <Route exact path="/detail-restaurant" component={DetailRestaurant}/>
                <Route exact path="/listing-Page" component={ListingPage}/>
                <Route exact path="/FrontPage" component={FrontPage}/>
                <Route exact path='/' component={Home} />
                <Route component={FourOhFour} />
            </Switch>
        </BrowserRouter>

    </>
)