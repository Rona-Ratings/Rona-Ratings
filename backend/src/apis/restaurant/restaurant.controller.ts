import {NextFunction, Request, Response} from "express";
import {Status} from "../../utils/interfaces/Status";
import {selectAllRestaurants} from "../../utils/restaurant/selectAllRestaurants";
import {selectRestaurantsByZip} from "../../utils/restaurant/selectRestaurantByZip";
import {selectRestaurantByRestaurantId} from "../../utils/restaurant/selectRestaurantByRestaurantId";



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
        const {restaurantZip} = request.body
        const data = await selectRestaurantsByZip(restaurantZip)
        console.log(data)
        const status: Status = {status: 200, data, message: null}
        return response.json(status)
    } catch (error) {
        console.log(error)
    }
}

export async function selectRestaurantByRestaurantIdController(request: Request, response: Response, nextFunction: NextFunction) {
    try {
        const data = await selectRestaurantByRestaurantId()
        console.log(data)
        const status: Status = {status: 200, data, message: null}
        return response.json(status)
    } catch (error) {
        console.log(error)
    }
}
