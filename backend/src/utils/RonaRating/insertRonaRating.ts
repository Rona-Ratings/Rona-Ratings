import {RonaRatings} from "../interfaces/RonaRatings";
import {connect} from "../database.utils";

export async function insertRonaRating(ronaRatings : RonaRatings) {
  try {
    const mySqlConnection = await connect()
    const mySqlQuery = "INSERT INTO ronaRatings(ronaRatingsProfileId, ronaRatingsRestaurantId, ronaRatingsCumulativeScore, ronaRatingsMaskWearing, ronaRatingsSafeTakeOut, ronaRatingsSixFootRule, ronaRatingsTotalScore) VALUES(UUID_TO_BIN(UUID()), UUID_TO_BIN(UUID()), :RonaRatingContent";

    const [rows] = await mySqlConnection.execute(mySqlQuery, RonaRating)
    return "Rona Rating created successfully"
  } catch (error) {
    console.log(error)
  }
}