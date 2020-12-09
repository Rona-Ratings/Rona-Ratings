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
        }
    }
})
export const {getAllRestaurants,addRestaurantByRestaurantId} = slice.actions

export const fetchAllRestaurants = () => async dispatch => {
    const  {data} = await httpConfig ('/apis/restaurant');
    dispatch(getAllRestaurants(data))
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