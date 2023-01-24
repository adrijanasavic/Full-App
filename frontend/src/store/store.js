import { configureStore } from "@reduxjs/toolkit";
import sliceChampion from "./sliceChampion";

const store = configureStore({
    reducer: {
        championStore: sliceChampion,
    },
});

export default store;