//Redux toolkit (tous les reducers seront combinés ici)

import { configureStore, combineReducers, createSlice } from "@reduxjs/toolkit";
// const rootReducer = combineReducers({});

// export default configureStore({
//     reducer: rootReducer,
//     devTools: process.env.NODE_ENV !== "production",
// })

const tokenSlice = createSlice({
    name: "token",
    initialState: { token: null },
    reducers: {
        getToken: (state, action) => {
            const newToken = action.payload;
            state.token = newToken;
        },
        throwToken: () => { },
    },
});

export const { getToken } = tokenSlice.actions;
export const store = configureStore({
    reducer: {
        token: tokenSlice.reducer,
    },
    //devTools enabled que si l'on est pas dans un environnement de production
    devTools: process.env.NODE_ENV !== "production",
});



