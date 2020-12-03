import {getAllCategories, getCategoryByCategoryId} from "./category.controller";
import {Router} from "express";
import {asyncValidatorController} from "../../utils/controllers/asyncValidator.controller";
import {check} from "express-validator";

export const categoryRoute = Router();
categoryRoute.route('/').get(getAllCategories)

categoryRoute.route("/:categoryId")
    .get(
        asyncValidatorController([
            check("categoryId", "please provide a valid categoryId").isUUID()
        ])
        , getCategoryByCategoryId
    )

export default categoryRoute