import express, { Application } from 'express'
import morgan from 'morgan'
// Routes
import { indexRoute } from './apis/index.route'
import {getAllRestaurantsRouter} from "./apis/restaurant/restaurant.route";
import {signUpRouter} from "./apis/sign-up/signup.route";
import {categoryRoute} from "./apis/category/category.route";
const session = require("express-session");
import passport = require('passport');
const MemoryStore = require('memorystore')(session);
import {passportStrategy} from "./apis/sign-in/sign-in.controller";
import {SignInRouter} from "./apis/sign-in/sign-in.route";
import {ProfileRoute} from "./apis/profile/profile.route";
import RestaurantByCategoryIdRouter from "./apis/restaurantCategory/restaurantCategory.route";






// The following class creates the app and instantiates the server
export class App {
    app: Application;

    constructor (
        private port?: number | string
    ) {
        this.app = express()
        this.settings()
        this.middlewares()
        this.routes()
    }

    // private method that sets the port for the sever, to one from index.route.ts, and external .env file or defaults to 3000
    public settings () {
        this.app.set('port', this.port || process.env.PORT || 8080)
    }

    // private method to setting up the middleware to handle json responses, one for dev and one for prod
    private middlewares () {
        const sessionConfig  =  {
            store: new MemoryStore({
                checkPeriod: 100800
            }),
            secret:"secret",
            saveUninitialized: true,
            resave: true,
            maxAge: "3h"
        };

        this.app.use(morgan('dev'));
        this.app.use(express.json());
        this.app.use(session(sessionConfig));
        this.app.use(passport.initialize());
        this.app.use(passport.session());
        passport.use(passportStrategy);

    }

    // private method for setting up routes in their basic sense (ie. any route that performs an action on profiles starts with /profiles)
    private routes () {
        this.app.use('/apis', indexRoute)
        this.app.use('/apis/restaurant', getAllRestaurantsRouter)
        this.app.use('/apis/category', categoryRoute)
        this.app.use('/apis/sign-in',SignInRouter )
        this.app.use('/apis/sign-up',signUpRouter )
        this.app.use('/apis/profile',ProfileRoute )






    }

    // starts the server and tells the terminal to post a message that the server is running and on what port
    public async listen (): Promise<void> {
        await this.app.listen(this.app.get('port'))
        console.log('Express application built successfully')
    }
}