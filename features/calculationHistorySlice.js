import { createSlice } from "@reduxjs/toolkit";
import { operators } from "../assets/utils";

const initialState = {
    history: []
}

const calculationHistorySlice = createSlice({
    name: 'calculationHistory',
    initialState,
    reducers: {
        clear: state => {
            state.history = []
        },
        add: (state, action) => {
            const expression = action.payload;

            if (expression.length !== 0 && (operators.includes(expression.slice(-1)) === false)) {
                if(state.history.length >= 5){
                    state.history.shift();
                }
                state.history.push([expression, eval(expression)]);
            }
        }
    }
})

export const {clear, add} = calculationHistorySlice.actions;
export default calculationHistorySlice.reducer;