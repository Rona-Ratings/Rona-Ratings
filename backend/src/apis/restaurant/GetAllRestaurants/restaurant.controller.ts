import {NextFunction, Request, Response} from "express";
import {Status} from "../../../utils/interfaces/Status";
import {selectAllRestaurants} from "../../../utils/restaurant/selectAllRestaurants";


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
