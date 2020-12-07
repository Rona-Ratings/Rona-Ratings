
import {connect} from "../database.utils";

export async function selectRestaurantByRestaurantId(restaurantId: string) {
    const mySqlConnection = await connect();
    const mySqlQuery = 'SELECT BIN_TO_UUID(restaurantId) AS restaurantId, restaurantAddress, restaurantImage, restaurantName, restaurantPhone, restaurantRonaRating, restaurantServices, restaurantYelpRating, restaurantZip FROM restaurant WHERE restaurantId = UUID_TO_BIN(:restaurantId)';
    const [rows] = await mySqlConnection.execute(mySqlQuery, {restaurantId})
    return rows;
}