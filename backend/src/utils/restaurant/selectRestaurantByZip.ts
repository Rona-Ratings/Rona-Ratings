import {connect} from "../database.utils";



export async function selectRestaurantsByZip(restaurantZip: string) {
    try {

        const mysqlConnection = await connect()
        const mySqlQuery = "SELECT BIN_TO_UUID(restaurantId) AS restaurantId, restaurantAddress, restaurantImage, restaurantName, restaurantPhone, restaurantServices, restaurantYelpRating FROM restaurant WHERE restaurantZip = :restaurantZip";
        const [rows] = await mysqlConnection.execute(mySqlQuery, {restaurantZip})
        return rows
    } catch (error) {
        console.log(error)
        return undefined
    }
}