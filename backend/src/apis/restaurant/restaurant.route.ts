import { Router } from 'express';
import {
    getAllRestaurantsController,
    getRestaurantByRestaurantIdController, getRestaurantCategoryByCategoryIdController,
    getRestaurantsByZipController, restaurantByCategoryAndZipController
} from "./restaurant.controller";
import {asyncValidatorController} from "../../utils/controllers/asyncValidator.controller";
import {check} from "express-validator";



export const restaurantRoute = Router();



// Every new route is instantiated below. It will include the controller name and the type of action (get, post, delete, put, patch)
restaurantRoute.route('/:restaurantId')
    .get(asyncValidatorController([
        check("restaurantId", "please provide a valid restaurantId").isUUID()
    ]), getRestaurantByRestaurantIdController)

restaurantRoute.route('/categoryId/:categoryId')
    .get( asyncValidatorController([
        check("categoryId", "please provide a valid categoryId").isUUID()
    ]),getRestaurantCategoryByCategoryIdController)

restaurantRoute.route('/restaurantZip/:restaurantZip')
    .get(asyncValidatorController([
        check("restaurantZip", "please provide a valid restaurantZip").isPostalCode("US")
    ]),getRestaurantsByZipController)

restaurantRoute.route('/categoryAndZip/:categoryId/:restaurantZip')
    .get( asyncValidatorController([
        check("categoryId", "please provide a valid categoryId"),
        check("restaurantZip", "please provide a valid restaurantZip").isPostalCode("US")
    ]),restaurantByCategoryAndZipController)

restaurantRoute.route('/')
    .get( getAllRestaurantsController)




