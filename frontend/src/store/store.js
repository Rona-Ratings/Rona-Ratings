import {combineReducers} from "redux"

import restaurants  from "./restaurants"
import {configureStore} from "@reduxjs/toolkit";

const reducer = combineReducers({ restaurants})

export const store = configureStore({reducer})