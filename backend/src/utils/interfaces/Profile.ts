export interface PartialProfile {
    profileId : string|null,
    profileUserName: string,
    profileEmail: string,

}

export interface Profile {
    profileId : string|null,
    profileActivationToken : string|null,
    profileUserName: string,
    profileEmail: string,
    profilePass: string,

}