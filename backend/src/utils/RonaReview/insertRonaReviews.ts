import {RonaReview} from "../interfaces/RonaReview";
import {connect} from "../database.utils";

export async function insertRonaReviews(RonaReview: RonaReview) {
  try {
    const mySqlConnection = await connect()
    const mySqlQuery = "INSERT INTO RonaReview(RonaReviewId, RonaReviewProfileId, RonaReviewContent, RonaReviewDate ) VALUES(UUID_TO_BIN(UUID()), UUID_TO_BIN(:RonaReviewProfileId), :RonaReviewContent, NOW())";

    const [rows] = await mySqlConnection.execute(mySqlQuery, RonaReview)
    return "Rona Review created successfully"
  } catch (error) {
    console.log(error)
  }
}