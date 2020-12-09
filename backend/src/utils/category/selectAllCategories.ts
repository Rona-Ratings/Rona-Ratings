import {connect} from "../database.utils";
import {Request, Response} from "express";
import {Status} from "../interfaces/Status";


/**
 * Helper function that grabs all misquotes
 **/
export async function selectAllCategories() {
    try {

        const mysqlConnection = await connect()
        //const mySqlQuery = "Select BIN_TO_UUID(categoryId) AS categoryId, categoryType from category"
        const mySqlQuery = "Select DISTINCT categoryType from category order by categoryType asc"
        const [rows] = await mysqlConnection.execute(mySqlQuery)
        return rows
    } catch (error) {
        console.log(error)
        return undefined
    }
}