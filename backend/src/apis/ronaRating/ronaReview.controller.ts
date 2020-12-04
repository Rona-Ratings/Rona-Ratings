import {Request, Response, NextFunction} from 'express';

// Interfaces (represent the DB model and types of the columns associated with a specific DB table)
import {RonaReview} from '../../utils/interfaces/RonaReview';
import {Status} from '../../utils/interfaces/Status';
import {Profile} from "../../utils/interfaces/Profile";
import {insertronaReview} from "../../utils/RonaReview/insertRonaReviews"
import {selectAllRonaReview} from "../../utils/RonaReview/selectAllRonaReview";
import {selectRonaReviewByRonaReviewProfileId} from "../../utils/RonaReview/selectRonaReviewsByRonaReviewProfileId";

const {validationResult} = require('express-validator');

export async function getAllRonaReviewController(request: Request, response: Response): Promise<Response | void> {

    try {
        const data = await selectAllRonaReview()
        // return the response
        const status: Status = {status: 200, message: null, data};
        return response.json(status);
    } catch(error) {
        console.log(error);
    }
}

export async function getRonaReviewByRonaReviewProfileIdController(request : Request, response: Response, nextFunction: NextFunction){
    const     {ronaReviewProfileId} = request.params
    const data  = await selectRonaReviewByRonaReviewProfileId(ronaReviewProfileId)
    return response.json({status:200, message: null, data})
}

export async function postRonaReview(request: Request, response: Response) {
    try {

        const {RonaReviewContent} = request.body;

        const RonaReviewProfileId = <string>request.session?.profile.profileId

        const RonaReview: RonaReview = {
            RonaReviewId: null,
            RonaReviewProfileId,
            RonaReviewContent,
            RonaReviewDate: null
        }
        const result = await insertRonaReview(RonaReview)
        const status: Status = {
            status: 200,
            message: result ?? 'Rona Review successfully created',
            data: null
        };
        return response.json(status);

    } catch(error) {
        console.log(error);
    }
}



// export async function deleteRonaReview(request: Request, response: Response) {
// 	try {
// 		const {RonaReviewId} = request.body;
// 		const result = await deleteRonaReview(RonaReviewId)
// 		const status: Status = {status: 200, data, message: null}
// 		return response.json(status)
// 	} catch (error) {
// 		console.log(error)
// 	}
// }