import { configureStore } from "@reduxjs/toolkit";

import getTokenReducer from "../feature/getToken.slice";

export default configureStore({
  reducer: {
    token: getTokenReducer,
  },
});