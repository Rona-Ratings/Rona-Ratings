import {NextFunction, Request, Response} from "express";
import {Status} from "../../../utils/interfaces/Status";
import {selectRestaurantsByZip} from "../../../utils/restaurant/selectRestaurantByZip";


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