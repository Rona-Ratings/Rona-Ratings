import {Request, Response} from "express";
import {Status} from "../../utils/interfaces/Status";
import {selectAllCategories} from "../../utils/category/selectAllCategories";
import {selectCategoryByCategoryId} from "../../utils/category/selectCategoryByCategoryId";



export async function getAllCategories(request: Request, response: Response) : Promise<Response> {
    try {

        const mySqlResult = await selectAllCategories();
        const data = mySqlResult ?? null
        const status: Status = {status: 200, data, message: null}
        return response.json(status)

    } catch (error) {
        return(response.json({status: 400, data: null, message: error.message}))

    }

}
export async function getCategoryByCategoryId(request: Request, response: Response) : Promise<Response> {
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