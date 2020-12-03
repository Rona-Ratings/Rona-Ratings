import {connect} from "../database.utils";
import {Restaurant} from "../interfaces/Restaurant";

export async function insertRestaurant(restaurant: Restaurant) {
    console.log(restaurant)
    try {
        const mySqlConnection = await connect()
        const mySqlQuery = "INSERT INTO restaurant(restaurantId, restaurantAddress, restaurantImage, restaurantName, restaurantPhone, restaurantServices, restaurantYelpRating, restaurantZip ) VALUES(UUID_TO_BIN(:restaurantId), :restaurantAddress, :restaurantImage, :restaurantName, :restaurantPhone, :restaurantServices, :restaurantYelpRating, :restaurantZip)";
        const [rows] = await mySqlConnection.execute(mySqlQuery, restaurant)
        return "Restaurant created successfully"
    } catch (error) {
        console.log(error)
    }
}