import {combineReducers} from "redux"

import restaurants  from "./restaurants"
import {configureStore} from "@reduxjs/toolkit";
import categories from "./categories";

const reducer = combineReducers({ restaurants, categories})

export const store = configureStore({reducer})