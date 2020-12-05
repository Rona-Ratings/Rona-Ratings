
import {connect} from "../database.utils";

export async function selectRonaReviewByRonaReviewProfileId(RonaRatingsProfileId: string) {
    const mySqlConnection = await connect();
    const mySqlQuery = 'SELECT BIN_TO_UUID(RonaRatingsProfileId) AS RonaRatingsProfileId, BIN_TO_UUID (RonaReviewProfileId) AS RonaReviewProfileId, RonaReviewContent, profile.profileAtHandle, profile.profileAvatarUrl, (SELECT COUNT(*) FROM `like` WHERE RonaRatings.RonaReviewId = like.likeRonaReviewId) AS likeCount FROM RonaRatings INNER JOIN profile ON profile.profileId = RonaRatings.RonaReviewProfileId WHERE RonaReviewProfileId = UUID_TO_BIN(:RonaReviewProfileId) ORDER BY RonaReviewDate DESC'
    const [rows] = await mySqlConnection.execute(mySqlQuery, {RonaReviewProfileId})
    return rows;
}