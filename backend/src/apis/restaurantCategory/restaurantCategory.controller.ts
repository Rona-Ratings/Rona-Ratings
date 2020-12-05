git import {NextFunction, Request, Response} from "express";
import {Status} from "../../utils/interfaces/Status";
import {selectAllRestaurants} from "../../utils/restaurant/selectAllRestaurants";
import {selectCategoryByCategoryId} from "../../utils/category/selectCategoryByCategoryId";


export async function getRestaurantCategoryByCategoryId(request: Request, response: Response) : Promise<Response> {
    try {
        const {categoryId} = request.params
        const mySqlResult = await selectCategoryByCategoryId(categoryId);
        const data = mySqlResult ?? null
        const status: Status = {status: 200, data, message: null}
        return response.json(status)

    } catch (error) {
        return(response.json({status: 400, data: null, message: error.message}))

    }

}


export async function getRestaurantCategoryByRestaurantId(request: Request, response: Response, nextFunction: NextFunction) {
    try {
        const data = await ()
        console.log(data)
        const status: Status = {status: 200, data, message: null}
        return response.json(status)
    } catch (error) {
        console.log(error)
    }
}
