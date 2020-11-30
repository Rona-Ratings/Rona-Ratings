import { Router } from 'express';
import {getAllRestaurantsController, getRestaurantsByRestaurantZipCodeController, GetRestaurant} from './serach.controller';
import { asyncValidatorController } from '../../utils/controllers/asyncValidator.controller';
import { SearchValidator } from './Search.validator';
import {isLoggedIn} from "../../utils/controllers/isLoggedIn.controller";
const { checkSchema } = require('express-validator');

const router = Router();

router.route("/RestaurantZipCode/:RestaurantZipCode").get(getRestaurantsByRestaurantZipCodeController)

// Every new route is instantiated below. It will include the controller name and the type of action (get, post, delete, put, patch)
router.route('/')
    .get( getAllRestaurantsController)
    .post(isLoggedIn, asyncValidatorController(checkSchema(SearchValidator)), GetRestaurant);

export default router;