import { Router } from 'express';
import {
    getAllRestaurantsController,
    getRestaurantByRestaurantIdController, getRestaurantCategoryByCategoryIdController,
    getRestaurantsByZipController
} from "./restaurant.controller";
import {asyncValidatorController} from "../../utils/controllers/asyncValidator.controller";
import {check} from "express-validator";



export const getAllRestaurantsRouter = Router();

//router.route("/RestaurantZipCode/:RestaurantZipCode").get(getRestaurantsByRestaurantZipCodeController)

// Every new route is instantiated below. It will include the controller name and the type of action (get, post, delete, put, patch)
getAllRestaurantsRouter.route('/:restaurantId')
    .get(asyncValidatorController([
        check("restaurantId", "please provide a valid restaurantId").isUUID()
    ]), getRestaurantByRestaurantIdController)

getAllRestaurantsRouter.route('/categoryId/:categoryId')
    .get( asyncValidatorController([
        check("categoryId", "please provide a valid categoryId").isUUID()
    ]),getRestaurantCategoryByCategoryIdController)

getAllRestaurantsRouter.route('/restaurantZip/:restaurantZip')
    .get(asyncValidatorController([
        check("restaurantZip", "please provide a valid restaurantZip").isPostalCode("US")
    ]),getRestaurantsByZipController)

getAllRestaurantsRouter.route('/')
    .get( getAllRestaurantsController)




