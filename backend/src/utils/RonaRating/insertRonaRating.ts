import {RonaReview} from "../interfaces/RonaRatings";
import {connect} from "../database.utils";

export async function insertRonaRating(RonaReview: RonaReview) {
  try {
    const mySqlConnection = await connect()
    const mySqlQuery = "INSERT INTO RonaRatings(RonaReviewId, RonaReviewProfileId, RonaReviewContent, RonaReviewDate ) VALUES(UUID_TO_BIN(UUID()), UUID_TO_BIN(:RonaReviewProfileId), :RonaReviewContent, NOW())";

    const [rows] = await mySqlConnection.execute(mySqlQuery, RonaReview)
    return "Rona Review created successfully"
  } catch (error) {
    console.log(error)
  }
}