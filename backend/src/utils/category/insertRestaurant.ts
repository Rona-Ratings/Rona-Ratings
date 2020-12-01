import {connect} from "../database.utils";
import {Category} from "../interfaces/Category";

export async function insertCategory(category: Category) {
    console.log(category)
    try {
        const mySqlConnection = await connect()
        const mySqlQuery = "INSERT INTO category()";
        const [rows] = await mySqlConnection.execute(mySqlQuery, category)
        return "Restaurant created successfully"
    } catch (error) {
        console.log(error)
    }
}