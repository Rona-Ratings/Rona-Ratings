import {connect} from "../database.utils";
import {Request, Response} from "express";
import {Status} from "../interfaces/Status";


/**
 * Helper function that grabs all misquotes
 **/
export async function selectAllCategories() {
    try {

        const mysqlConnection = await connect()
<<<<<<< HEAD:backend/src/utils/category/selectAllCategories.ts

=======
>>>>>>> origin/catagory-api:backend/src/utils/category/selectAllCategorys.ts
        const mySqlQuery = "Select BIN_TO_UUID(categoryId) AS categoryId, categoryType from category"
        const [rows] = await mysqlConnection.execute(mySqlQuery)
        return rows
    } catch (error) {
        console.log(error)
        return undefined
    }
}