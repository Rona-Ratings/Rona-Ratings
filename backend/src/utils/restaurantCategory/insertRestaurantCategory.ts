import {connect} from "../database.utils";
import {RestaurantCategory} from "../interfaces/RestaurantCategory";

export async function insertRestaurantCategory(restaurantCategory: RestaurantCategory) {

    try {
        const mySqlConnection = await connect()
        const mySqlQuery = "INSERT INTO restaurantCategory(restaurantCategoriesCategoryId, restaurantCategoriesRestaurantId) VALUES (UUID_TO_BIN(:restaurantCategoriesCategoryId), UUID_TO_BIN(:restaurantCategoriesRestaurantId)) ";
        const [rows] = await mySqlConnection.execute(mySqlQuery, restaurantCategory)
        return "Restaurant created successfully"
    } catch (error) {
        console.log(error)
    }
}