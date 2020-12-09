import { createSlice } from '@reduxjs/toolkit'
import {httpConfig} from "../utils/httpConfig";
import {act} from "@testing-library/react";

const slice = createSlice({
    name: "Restaurants",
    initialState: [],
    reducers: {
        getAllRestaurants : (restaurants,action ) => {
            return action.payload

        },
        addRestaurantByRestaurantId :(restaurants,action) =>{
            restaurants.push(action.payload)
        },
        getRestaurantsByTypeAndZip :(restaurants,action) =>{
            return action.payload
        }

    }
})
export const {getRestaurantsByTypeAndZip,addRestaurantByRestaurantId} = slice.actions

export const fetchRestaurantsByTypeAndZip = (categoryType, restaurantZip) => async dispatch => {
    const  {data} = await httpConfig (`/apis/restaurant/categoryAndZip/${categoryType}/${restaurantZip}`);
    dispatch(getRestaurantsByTypeAndZip(data[0]))
}

export const fetchRestaurantByRestaurantId =(restaurantId) => async (dispatch,getState) => {
    const restaurants = getState() .restaurants

    const isFound = restaurants.find(restaurant => restaurant.restaurantId === restaurantId)

    if (isFound === undefined) {
        const {data} = await httpConfig (`/apis/restaurant/${restaurantId}`)
        console.log(data)
        dispatch(addRestaurantByRestaurantId(data[0]))

    }
}
export default slice.reducer