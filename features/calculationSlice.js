import { createSlice } from "@reduxjs/toolkit";
import { operators } from "../assets/utils";

const initialState = {
    expression: "",
    result: 0,
    decimalPresent: false
}

const calculationSlice = createSlice({
    name: 'calculation',
    initialState,
    reducers: {
        clear: (state) => {
            state.expression = "";
            state.result = 0;
            state.decimalPresent = false;
        },
        backspace: (state) => {
            if (state.result !== 0) {
                state.expression = "";
                state.result = 0;
                state.decimalPresent = false;
            }
            else if (state.expression.length !== 0) {
                const lastChar = state.expression.slice(-1);
                if (lastChar === '.') {
                    state.decimalPresent = false;
                }
                state.expression = state.expression.slice(0, -1);
            }
        },
        doubleZero: (state) => {
            if (state.expression.length !== 0) {
                const lastChar = state.expression.slice(-1);
                let val = "";

                if (operators.includes(lastChar)) {
                    val = "0";
                }
                else if ((state.expression === "0")) {
                    val = "";
                }
                else if (state.expression.length >= 2) {
                    const secondLastChar = state.expression[state.expression.length - 2];
                    if ((lastChar === '0') && (operators.includes(secondLastChar))) {
                        val = "";
                    }
                    else {
                        val = "00";
                    }
                }
                else {
                    val = "00";
                }
                state.expression += val;
            }
            else {
                state.expression = "0";
                state.result = 0;
            }
        },
        zero: (state) => {
            if (state.expression === "0") {
                state.expression += "";
            }
            else if (state.expression.length >= 2) {
                const lastChar = state.expression.slice(-1);
                const secondLastChar = state.expression[state.expression.length - 2];

                if ((lastChar === '0') && (operators.includes(secondLastChar))) {
                    state.expression += "";
                }
                else {
                    state.expression += "0";
                }
            }
            else {
                state.expression += "0";
            }

            state.result = 0;
        },
        decimal: (state) => {
            if ((state.expression === "") || (operators.includes(state.expression.slice(-1)))) {
                state.expression += "0.";
            }
            else if (!state.decimalPresent) {
                state.expression += ".";
            }

            state.result = 0;
            state.decimalPresent = true;
        },
        operation: (state, action) => {
            if (state.result !== 0) {
                const str = state.result.toString() + action.payload;
                state.result = 0;
                state.expression += str;
            }
            else if (state.expression === "") {
                state.expression += "0" + action.payload;
            }
            else if (operators.includes(state.expression.slice(-1))) {
                state.expression = state.expression.slice(0, -1) + action.payload;
            }
            else {
                state.expression += action.payload;
            }
        },
        result: (state) => {
            if (state.expression.length !== 0 && (operators.includes(state.expression.slice(-1)) === false)) {
                const value = eval(state.expression);
                state.expression = "";
                state.result = value;
            }
            state.decimalPresent = false;
        },
        numberOperation: (state, action) => {
            if (state.result !== 0) {
                state.result = 0;
            }

            state.expression += action.payload;
        }
    }
})

export const {
    clear,
    backspace,
    doubleZero,
    zero,
    decimal,
    operation,
    result,
    numberOperation
} = calculationSlice.actions;
export default calculationSlice.reducer;