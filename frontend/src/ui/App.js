import { BrowserRouter } from 'react-router-dom'
import { Route, Switch } from 'react-router'
import { Home } from './Home'
import { FourOhFour } from './FourOhFour'
import React from 'react'
import {DetailRestaurant} from "./DetailRestaurant/DetailRestaurant";
<<<<<<< HEAD
import { ListingPage } from "./ListingsPage/ListingPage";
=======
import {FrontPage} from "./FrontPage/FrontPage";
>>>>>>> front-page
export const App = () => (
    <>
        <BrowserRouter>
            <Switch>
                <Route exact path="/detail-restaurant" component={DetailRestaurant}/>
<<<<<<< HEAD
                <Route exact path="/listing-Page" component={ListingPage}/>
                <Route exact path='/' component={Home} />
=======
                <Route exact path='/' component={FrontPage} />
>>>>>>> front-page
                <Route component={FourOhFour} />
            </Switch>
        </BrowserRouter>

    </>
)