import { Router } from 'express';
import {getAllRonaReviewController, getRonaReviewByRonaReviewProfileIdController, postRonaReview} from './RonaReview.controller';
import { asyncValidatorController } from '../../utils/controllers/asyncValidator.controller';
import { RonaReviewValidator } from './RonaReview.validator';
import {isLoggedIn} from "../../utils/controllers/isLoggedIn.controller";
const { checkSchema } = require('express-validator');

const router = Router();

router.route("/RonaReviewProfileId/:RonaReviewProfileId").get(getRonaReviewByRonaReviewProfileIdController)

// Every new route is instantiated below. It will include the controller name and the type of action (get, post, delete, put, patch)
router.route('/')
    .get( getAllRonaReviewController)
    .post(isLoggedIn, asyncValidatorController(checkSchema(RonaReviewValidator)), postRonaReview);

export default router;