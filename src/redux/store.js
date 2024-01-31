import {configureStore} from "@reduxjs/toolkit"
import { userReducer } from "./reducers/userReducer";
import { profileReducer } from "./reducers/profileReducer";
import { courseReducer } from "./reducers/courseReducer";

// export const server = "http://localhost:8000/api/v1"
export const server = "https://learn-hub-backend.vercel.app/api/v1"

const store = configureStore({
    reducer:{
     user:userReducer,
     profile:profileReducer,
     courses:courseReducer
    }
});


export default store;