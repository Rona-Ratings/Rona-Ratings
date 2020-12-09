import {NextFunction, Request, Response} from "express";
import {Status} from "../../utils/interfaces/Status";
import {selectAllRestaurants} from "../../utils/restaurant/selectAllRestaurants";
import {selectRestaurantsByZip} from "../../utils/restaurant/selectRestaurantByZip";
import {selectRestaurantByRestaurantId} from "../../utils/restaurant/selectRestaurantByRestaurantId";
import {selectRestaurantByCategoryId} from "../../utils/restaurant/selectRestaurantCategoryByCategoryId";
import {selectRestaurantByCategoryAndZip} from "../../utils/restaurant/selectRestaurantByCategoryAndZip";



export async function getAllRestaurantsController(request: Request, response: Response, nextFunction: NextFunction) {
    try {
        const data = await selectAllRestaurants()
        console.log(data)
        const status: Status = {status: 200, data, message: null}
        return response.json(status)
    } catch (error) {
        console.log(error)
    }
}

export async function getRestaurantsByZipController(request: Request, response: Response, nextFunction: NextFunction) {
    try {
        const {restaurantZip} = request.params
        const data = await selectRestaurantsByZip(restaurantZip)
        console.log(data)
        const status: Status = {status: 200, data, message: null}
        return response.json(status)
    } catch (error) {
        console.log(error)
    }
}

export async function getRestaurantCategoryByCategoryIdController(request: Request, response: Response) : Promise<Response> {
    try {
        const {categoryId} = request.params
        const mySqlResult = await selectRestaurantByCategoryId(categoryId);
        const data = mySqlResult ?? null
        const status: Status = {status: 200, data, message: null}
        return response.json(status)
    } catch (error) {
        return(response.json({status: 400, data: null, message: error.message}))

    }

}

export async function getRestaurantByRestaurantIdController(request: Request, response: Response, nextFunction: NextFunction) {
    try {
        const {restaurantId} = request.params
        const data = await selectRestaurantByRestaurantId(restaurantId)
        console.log(data)
        const status: Status = {status: 200, data, message: null}
        return response.json(status)
    } catch (error) {
        console.log(error)
    }
}

export async function getRestaurantByCategoryAndZipController(request: Request, response: Response, nextFunction: NextFunction) {
    try {
        const {categoryType} = request.params
        const {restaurantZip} = request.params
        console.log(categoryType)
        console.log(restaurantZip)
        console.log(request.params)
        const data = await selectRestaurantByCategoryAndZip(categoryType, restaurantZip)

        console.log(data)
        const status: Status = {status: 200, data, message: null}
        return response.json(status)
    } catch (error) {
        console.log(error)
    }
}
