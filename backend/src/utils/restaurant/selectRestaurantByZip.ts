import {connect} from "../database.utils";



export async function selectAllRestaurants() {
    try {

        const mysqlConnection = await connect()
        const mySqlQuery = "SELECT BIN_TO_UUID(restaurantId) AS restaurantId, restaurantAddress, restaurantImage, restaurantName, restaurantPhone, restaurantServices, restaurantYelpRating FROM restaurant WHERE restaurantZip "
        const [rows] = await mysqlConnection.execute(mySqlQuery)
        return rows
    } catch (error) {
        console.log(error)
        return undefined
    }
}