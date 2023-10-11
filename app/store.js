import { configureStore } from "@reduxjs/toolkit";
import calculationHistorySlice from "../features/calculationHistorySlice";
import calculationSlice from "../features/calculationSlice";

const store = configureStore({
    reducer: {
        calculation: calculationSlice,
        calculationHistory : calculationHistorySlice
    }
})

export default store;