import express, { Application } from 'express'
import morgan from 'morgan'
// Routes
import { indexRoute } from './apis/index.route'
import restaurantRouter from "./apis/restaurant/restaurant.route";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import categoryRoute from "./apis/category/category.route";
=======
import {signUpRouter} from "./apis/sign-up/signup.route";
>>>>>>> 989dad0... sign up
=======
=======
>>>>>>> 1fdd015... rebased with sign-up-apis
import {signUpRouter} from "./apis/sign-up/signup.route";
import categoryRoute from "./apis/category/category.route";
<<<<<<< HEAD
>>>>>>> 4af0cc4... fix category
>>>>>>> b6e443b... fix category
=======

>>>>>>> 1fdd015... rebased with sign-up-apis

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
        this.app.set('port', this.port || process.env.PORT || 4200)
    }

    // private method to setting up the middleware to handle json responses, one for dev and one for prod
    private middlewares () {
        this.app.use(morgan('dev'))
        this.app.use(express.json())
    }

    // private method for setting up routes in their basic sense (ie. any route that performs an action on profiles starts with /profiles)
    private routes () {
        this.app.use('/apis', indexRoute)
        this.app.use('/apis/restaurant', restaurantRouter)
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        this.app.use('/apis/category', categoryRoute)
=======
        this.app.use('/apis/sign-up',signUpRouter )
>>>>>>> 989dad0... sign up
=======
=======
>>>>>>> 1fdd015... rebased with sign-up-apis
        this.app.use('/apis/sign-up',signUpRouter )
        this.app.use('/apis/category', categoryRoute)
<<<<<<< HEAD
>>>>>>> 4af0cc4... fix category
>>>>>>> b6e443b... fix category
=======

>>>>>>> 1fdd015... rebased with sign-up-apis
    }

    // starts the server and tells the terminal to post a message that the server is running and on what port
    public async listen (): Promise<void> {
        await this.app.listen(this.app.get('port'))
        console.log('Express application built successfully')
    }
}