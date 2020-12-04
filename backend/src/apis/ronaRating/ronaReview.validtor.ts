export const RonaReviewValidator = {
    RonaReviewProfileId: {
        isUUID: {
            errorMessage: 'please provide a valid Rona ReviewProfileId'
        }
    },
    RonaReviewContent: {
        isLength: {
            errorMessage: 'a Rona Review cannot be longer than 140 characters',
            options: { max: 140 }
        },
        trim: true,
        escape: true
    },
    RonaReviewDate: {
        toDate: true
    }
};