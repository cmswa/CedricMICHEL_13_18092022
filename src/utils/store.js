import { configureStore } from "@reduxjs/toolkit";

import getTokenReducer from "../feature/getToken.slice";
import getUserReducer from "../feature/getUser.slice"

export default configureStore({
  reducer: {
    token: getTokenReducer,
    user: getUserReducer,
  },
});