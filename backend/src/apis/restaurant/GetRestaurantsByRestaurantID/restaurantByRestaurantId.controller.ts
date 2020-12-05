import {NextFunction, Request, Response} from "express";
import {Status} from "../../../utils/interfaces/Status";
import {selectRestaurantByRestaurantId} from "../../../utils/restaurant/selectRestaurantByRestaurantId";


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