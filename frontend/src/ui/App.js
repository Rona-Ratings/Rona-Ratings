import { BrowserRouter } from 'react-router-dom'
import { Route, Switch } from 'react-router'
import { Home } from './Home'
import { FourOhFour } from './FourOhFour'
import React from 'react'
import {DetailRestaurant} from "./DetailRestaurant/DetailRestaurant";

export const App = () => (
    <>
        <BrowserRouter>
            <Switch>
                <Route exact path="/detail-restaurant" component={DetailRestaurant}/>
                <Route exact path='/' component={Home} />
                <Route component={FourOhFour} />
            </Switch>
        </BrowserRouter>

    </>
)