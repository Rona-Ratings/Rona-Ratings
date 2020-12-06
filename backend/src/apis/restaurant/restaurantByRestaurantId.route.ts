import { Router } from 'express';
import {selectRestaurantByRestaurantIdController} from "./restaurant.controller";





export const restaurantByRestaurantIdRouter = Router();

//router.route("/RestaurantZipCode/:RestaurantZipCode").get(getRestaurantsByRestaurantZipCodeController)

// Every new route is instantiated below. It will include the controller name and the type of action (get, post, delete, put, patch)
restaurantByRestaurantIdRouter.route('/')
    .get(selectRestaurantByRestaurantIdController)