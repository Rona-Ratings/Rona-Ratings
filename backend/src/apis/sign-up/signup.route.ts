import { Router } from 'express';
import { signupProfile } from './sign-up.controller';
import { signupValidator } from './signup.validator';

import {activationController}from "./activation.controller";
import {param} from "express-validator";
import {asyncValidatorController} from "../../utils/controllers/asyncValidator.controller";

const { checkSchema } = require('express-validator');

export const signUpRouter = Router();


signUpRouter.route('/')
    .post(
        asyncValidatorController(checkSchema(signupValidator)),
        signupProfile
    );

 signUpRouter.route('/activation/:activation')
    .get(
        asyncValidatorController([param("activation", "invalid activation link").isHexadecimal().notEmpty()]),
        activationController
     )

