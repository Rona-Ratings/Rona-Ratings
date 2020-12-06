import { Router } from 'express';
import {getRestaurantsByZipController} from "./restaurant.controller";




export const restaurantByZipRouter = Router();

//router.route("/RestaurantZipCode/:RestaurantZipCode").get(getRestaurantsByRestaurantZipCodeController)

// Every new route is instantiated below. It will include the controller name and the type of action (get, post, delete, put, patch)
restaurantByZipRouter.route('/')
    .get(getRestaurantsByZipController)

