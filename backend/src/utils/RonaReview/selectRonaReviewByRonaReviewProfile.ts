
import {RonaReview} from "../interfaces/RonaReview";
import {connect} from "../database.utils";

export async function selectRonaReviewByRonaReviewProfileId(RonaReviewProfileId: string) {
    const mySqlConnection = await connect();
    const mySqlQuery = 'SELECT BIN_TO_UUID(RonaReviewId) AS RonaReviewId, BIN_TO_UUID (RonaReviewProfileId) AS RonaReviewProfileId, RonaReviewContent, profile.profileAtHandle, profile.profileAvatarUrl, (SELECT COUNT(*) FROM `like` WHERE RonaReview.RonaReviewId = like.likeRonaReviewId) AS likeCount FROM RonaReview INNER JOIN profile ON profile.profileId = RonaReview.RonaReviewProfileId WHERE RonaReviewProfileId = UUID_TO_BIN(:RonaReviewProfileId) ORDER BY RonaReviewDate DESC'
    const [rows] = await mySqlConnection.execute(mySqlQuery, {RonaReviewProfileId})
    return rows;
}