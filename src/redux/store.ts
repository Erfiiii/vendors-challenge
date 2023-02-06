import { configureStore, } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import vendorsSlice from "../pages/vendors/vendorsSlice";
import saga from "./saga";

let sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        vendors: vendorsSlice
    },
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware({ thunk: false }), sagaMiddleware]
})

sagaMiddleware.run(saga);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;