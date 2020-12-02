import { Router } from 'express';
import {getAllRestaurantsController} from "./restaurant.controller";


export const restaurantRouter = Router();

//router.route("/RestaurantZipCode/:RestaurantZipCode").get(getRestaurantsByRestaurantZipCodeController)

// Every new route is instantiated below. It will include the controller name and the type of action (get, post, delete, put, patch)
restaurantRouter.route('/')
    .get( getAllRestaurantsController)


export default restaurantRouter;