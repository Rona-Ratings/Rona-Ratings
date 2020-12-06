import { Router } from 'express';
import {getRestaurantCategoryByCategoryIdController} from "./restaurantCategory.controller";



const RestaurantCategoryByCategoryIdRouter = Router();

//router.route("/RestaurantZipCode/:RestaurantZipCode").get(getRestaurantsByRestaurantZipCodeController)

// Every new route is instantiated below. It will include the controller name and the type of action (get, post, delete, put, patch)
RestaurantCategoryByCategoryIdRouter.route('/')
    .get( getRestaurantCategoryByCategoryIdController)


export default RestaurantCategoryByCategoryIdRouter;