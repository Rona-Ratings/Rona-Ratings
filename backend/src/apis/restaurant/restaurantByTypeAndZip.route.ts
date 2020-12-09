import {restaurantByCategoryAndZipController} from "./restaurant.controller";

import {Router} from "express";

export const restaurantByTypeAndZipRoute = Router();

restaurantByTypeAndZipRoute.route('/')
    .get(restaurantByCategoryAndZipController)