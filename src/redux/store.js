import {configureStore} from "@reduxjs/toolkit"
import { userReducer, usersReducer } from "./reducers/userReducer";
import { profileReducer } from "./reducers/profileReducer";
import { courseReducer } from "./reducers/courseReducer";
import { subscriptionReducer } from "./reducers/subscriptionReducer";
import { adminReducer } from "./reducers/adminReducer";

// export const server = "http://localhost:8000/api/v1"
export const server = "https://learn-hub-backend.vercel.app/api/v1";

const store = configureStore({
    reducer:{
     user:userReducer,
     profile:profileReducer,
     courses:courseReducer,
     subscription:subscriptionReducer,
     admin:adminReducer,
     users:usersReducer
    }
});


export default store;