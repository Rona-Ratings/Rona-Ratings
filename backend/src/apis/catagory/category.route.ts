import {getCategoryByCategoryId} from "./category.controller";
import {Router} from "express";
import {asyncValidatorController} from "../../utils/controllers/asyncValidator.controller";
import {check, checkSchema} from "express-validator";
import {selectAllRestaurants} from "../../utils/restaurant/selectAllRestaurants";

export const categoryRoute = Router();
categoryRoute.route('/').get(selectAllRestaurants)


categoryRoute.route("/:categoryId")
    .get(
        asyncValidatorController([
            check("categoryId", "please provide a valid categoryId").isUUID()
        ])
        , getCategoryByCategoryId
    )
