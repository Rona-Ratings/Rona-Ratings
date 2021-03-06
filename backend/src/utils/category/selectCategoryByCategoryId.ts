import {connect} from "../database.utils";


/**
 * Helper function that grabs all misquotes
 **/
export async function selectCategoryByCategoryId(categoryId:string) {
    try {

        const mysqlConnection = await connect()
        const mySqlQuery = "SELECT BIN_TO_UUID(categoryId) AS categoryId, categoryType FROM category WHERE BIN_TO_UUID(categoryId) = :categoryId"
        const [rows] = await mysqlConnection.execute(mySqlQuery, {categoryId})

        return rows
    } catch (error) {
        console.log(error)
        return undefined
    }
}