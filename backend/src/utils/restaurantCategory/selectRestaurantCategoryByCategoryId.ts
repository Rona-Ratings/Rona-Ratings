import {connect} from "../database.utils";


export async function selectRestaurantCategoryByCategoryId(restaurantCategory: RestaurantCategory) {

    try {
        const mySqlConnection = await connect()
        const mySqlQuery = "SELECT BIN_TO_UUID(restaurantCategoriesCategoryId) FROM restaurantCategory inner join category c on restaurantCategory.restaurantCategoriesCategoryId = c.categoryId"
        const [rows] = await mySqlConnection.execute(mySqlQuery, restaurantCategory)
        return "Restaurant created successfully"
    } catch (error) {
        console.log(error)
    }
}