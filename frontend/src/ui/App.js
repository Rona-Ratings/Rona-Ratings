import { BrowserRouter } from 'react-router-dom'
import { Route, Switch } from 'react-router'
import { Home } from './Home'
import { FourOhFour } from './FourOhFour'
import React from 'react'
import {RestaurantDetails} from "./restaurant-details/restaurant-details";
import { RestaurantListings } from "./restaurant-listings/restaurant-listings";
import { RestaurantHome} from "./restaurant-home/restaurant-home";
import 'bootstrap/dist/css/bootstrap.css';
import "./restaurant-home/restaurant-home.css"
import {MainNav} from "./MainNav/MainNav";
import {Provider} from "react-redux";
import Footer from "./Footer/Footer";



export const App = (store) => (
    <>
        <Provider store={store}>
        <BrowserRouter>
            <MainNav/>
            <Switch>
                <Route exact path="/restaurant-details" component={RestaurantDetails}/>
                <Route exact path="/restaurant-listings" component={RestaurantListings}/>
                <Route exact path="/" component={RestaurantHome}/>

                <Route component={FourOhFour} />
            </Switch>
        </BrowserRouter>
        </Provider>
        <Footer/>

    </>
)