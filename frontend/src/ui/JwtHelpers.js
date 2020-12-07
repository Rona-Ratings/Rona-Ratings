import React, {useState, useEffect} from "react";
import jwtDecode from "jwt-decode";



 //Custom hooks to grab the jwt and decode jwt data for logged in users.
// Author:jlittle10@cnm.edu


 export const UseJwt = () => {
	const [jwt, setJwt] = useState(null);

 	useEffect(() => {
		setJwt(window.localStorage.getItem("authorization"));
 	}, [jwt]);

 	return jwt;
 };

 export const UseJwtProfileUserName = () => {
 	const [ProfileUserName, setProfileUserName] = useState(null);
 	useEffect(() => {
		const token = window.localStorage.getItem("authorization");
		if(token !== null) {
			const decodedJwt = jwtDecode(token);
 			setProfileUserName(decodedJwt.profileUserName);
 		}
 	}, [ProfileUserName]);

	return ProfileUserName;
 };

 export const UseJwtProfileId = () => {
 	const [profileId, setProfileId] = useState(null);

 	useEffect(() => {
 		const token = window.localStorage.getItem("authorization");
		if(token !== null) {
 			const decodedJwt = jwtDecode(token);
			setProfileId(decodedJwt.profileId);
		}
 	}, [profileId]);
	return profileId;
 };




export const getToken = () => {
    const token = window.localStorage.getItem("authorization")
    return token ? jwtDecode(token) : null
}