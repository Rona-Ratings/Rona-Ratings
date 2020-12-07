import { createSlice } from '@reduxjs/toolkit'
import {httpConfig} from "../utils/httpConfig";

const slice = createSlice({
    name: "Restaurants",
    initialState: [],
    reducers: {
        getAllRestaurants : (restaurants,action ) => {
            return action.payload

        }
    }
})
export const {getAllRestaurants} = slice.actions

export const fetchAllRestaurants = () => async dispatch => {
    const  {data} = await httpConfig ('/apis/restaurant');
    dispatch(getAllRestaurants(data))
}


export default slice.reducer