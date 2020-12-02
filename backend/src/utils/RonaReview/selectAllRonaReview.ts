
import {RonaReview} from "../interfaces/RonaReview";
import {connect} from "../database.utils";
import {Profile} from "../interfaces/Profile";
import {Status} from "../interfaces/Status";

export async function selectAllRonaReview() {
    try {
        const mySqlConnection = await connect()
        const mySqlQuery = 'SELECT BIN_TO_UUID(RonaReviewId) AS RonaReviewId, BIN_TO_UUID (RonaReviewProfileId) AS RonaReviewProfileId, RonaReviewContent, RonaReviewDate, profile.profileAtHandle, profile.profileAvatarUrl, (SELECT COUNT(*) FROM `like` WHERE RonaReview.RonaReviewId = like.likeRonaReviewId) AS likeCount FROM RonaReview INNER JOIN profile ON profile.profileId = RonaReview.RonaReviewProfileId ORDER BY RonaReviewDate DESC'
        const [rows] = await mySqlConnection.execute(mySqlQuery)
        return rows;
    } catch (error) {
        console.log(error)
    }
}