import {connect} from "../database.utils";


export async function selectRestaurantByCategoryAndZip(categoryType: string, restaurantZip: string) {

    try {
        const mySqlConnection = await connect()
        //const mySqlQuery = "SELECT BIN_TO_UUID(restaurantId) AS restaurantId, restaurantAddress, restaurantImage, restaurantName, restaurantPhone, restaurantServices, restaurantYelpRating, restaurantZip FROM restaurant join restaurantCategory on restaurant.restaurantId = restaurantCategory.restaurantCategoriesRestaurantId where  restaurantCategory.restaurantCategoriesCategoryId = :categoryId";
        //const mySqlQuery = "SELECT BIN_TO_UUID(categoryId), categoryType FROM category join restaurantCategory on category.categoryId = restaurantCategory.restaurantCategoriesCategoryId = restaurantCategory.restaurantCategoriesCategoryId where  restaurantCategory.restaurantCategoriesCategoryId = :categoryId";
        const mySqlQuery = "SELECT BIN_TO_UUID(restaurantId) AS restaurantId, restaurantAddress, restaurantImage, restaurantName, restaurantPhone, restaurantRonaRating, restaurantServices, restaurantYelpRating, restaurantZip FROM restaurant join restaurantCategory on restaurant.restaurantId = restaurantCategory.restaurantCategoriesRestaurantId join category on category.categoryId = restaurantCategory.restaurantCategoriesCategoryId where categoryType = :categoryType and restaurant.restaurantZip = :restaurantZip";



        //const mySqlQuery = "SELECT BIN_TO_UUID(restaurantId) AS restaurantId, restaurantAddress, restaurantImage, restaurantName, restaurantPhone, restaurantRonaRating, restaurantServices, restaurantYelpRating, restaurantZip FROM restaurant where restaurant.restaurantZip = :restaurantZip";

        //const mySqlQuery = "SELECT BIN_TO_UUID(restaurantId) AS restaurantId, restaurantAddress, restaurantImage, restaurantName, restaurantPhone, restaurantRonaRating, restaurantServices, restaurantYelpRating, restaurantZip, restaurantCategory.restaurantCategoriesCategoryId, restaurantCategory.restaurantCategoriesRestaurantId FROM restaurant join restaurantCategory on restaurant.restaurantId = restaurantCategory.restaurantCategoriesRestaurantId where restaurantCategory.restaurantCategoriesCategoryId = UUID_TO_BIN(:categoryId)"

        //SELECT BIN_TO_UUID(categoryId) AS categoryId, categoryType FROM category WHERE BIN_TO_UUID(categoryId) = :categoryId
        const [rows] = await mySqlConnection.execute(mySqlQuery, {categoryType, restaurantZip})

        return [rows]
    } catch (error) {
        console.log(error)
    }
}