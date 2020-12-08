import { Router } from 'express';
import {
    getAllRonaReviewController,
    getRonaRatingByRonaRatingProfileIdController,
    getRonaReviewByRonaReviewProfileIdController,
    postRonaReview
} from './ronaRating.controller';
import { asyncValidatorController } from '../../utils/controllers/asyncValidator.controller';
import { RonaRatingValidator } from './RonaRatings.validator';
import {isLoggedIn} from "../../utils/controllers/isLoggedIn.controller";
const { checkSchema } = require('express-validator');

const router = Router();

router.route("/RonaReviewProfileId/:RonaReviewProfileId").get(getRonaRatingByRonaRatingProfileIdController)

// Every new route is instantiated below. It will include the controller name and the type of action (get, post, delete, put, patch)
router.route('/')
    .get( getAllRonaReviewController)
    .post(isLoggedIn, asyncValidatorController(checkSchema(RonaRatingValidator)), postRonaReview);

export default router;