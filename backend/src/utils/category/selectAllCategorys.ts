import {connect} from "../database.utils";
import {Request, Response} from "express";
import {Status} from "../interfaces/Status";


/**
 * Helper function that grabs all misquotes
 **/
export async function selectCategoryByCategoryId() {
    try {

        const mysqlConnection = await connect()
        const mySqlQuery = "Select categoryId, categoryType from category"
        const [rows] = await mysqlConnection.execute(mySqlQuery)
        return rows
    } catch (error) {
        console.log(error)
        return undefined
    }
}