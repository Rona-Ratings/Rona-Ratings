import { createSlice } from '@reduxjs/toolkit'
import {httpConfig} from "../utils/httpConfig";


const slice = createSlice({
    name: "Categories",
    initialState: [],
    reducers: {
        getAllCategories : (categories,action ) => {
            return action.payload

        }

    }
})
export const {getAllCategories} = slice.actions

export const fetchAllCategories = () => async dispatch => {
    const  {data} = await httpConfig ('/apis/category');
    dispatch(getAllCategories(data))
}


export default slice.reducer