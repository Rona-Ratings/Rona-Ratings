import {connect} from "../database.utils";


export async function selectRestaurantByCategoryId(categoryId: string) {

    try {
        const mySqlConnection = await connect()
        //const mySqlQuery = "SELECT BIN_TO_UUID(restaurantId) AS restaurantId, restaurantAddress, restaurantImage, restaurantName, restaurantPhone, restaurantServices, restaurantYelpRating, restaurantZip FROM restaurant join restaurantCategory on restaurant.restaurantId = restaurantCategory.restaurantCategoriesRestaurantId where  restaurantCategory.restaurantCategoriesCategoryId = :categoryId";
        //const mySqlQuery = "SELECT BIN_TO_UUID(categoryId), categoryType FROM category join restaurantCategory on category.categoryId = restaurantCategory.restaurantCategoriesCategoryId = restaurantCategory.restaurantCategoriesCategoryId where  restaurantCategory.restaurantCategoriesCategoryId = :categoryId";
        //const mySqlQuery = "SELECT BIN_TO_UUID(categoryId), categoryType FROM category join restaurantCategory on category.categoryId = restaurantCategory.restaurantCategoriesCategoryId = restaurantCategory.restaurantCategoriesCategoryId where  restaurantCategory.restaurantCategoriesCategoryId = :categoryId";
        //const mySqlQuery = "SELECT BIN_TO_UUID(restaurantId) FROM restaurant join restaurantCategory on restaurant.restaurantId = restaurantCategory.restaurantCategoriesRestaurantId where restaurantCategory.restaurantCategoriesCategoryId = UUID_TO_BIN(:categoryId)";
        const mySqlQuery = "SELECT BIN_TO_UUID(restaurantCategoriesRestaurantId), BIN_TO_UUID(restaurantCategoriesCategoryId) FROM restaurantCategory";
        //SELECT BIN_TO_UUID(categoryId) AS categoryId, categoryType FROM category WHERE BIN_TO_UUID(categoryId) = :categoryId
        const [rows] = await mySqlConnection.execute(mySqlQuery, {categoryId})
        return [rows]
    } catch (error) {
        console.log(error)
    }
}