import { Action, createReducer, on } from "@ngrx/store";
import { decrement, increment } from "./counter.actions";

export interface ICounter {
    counter: number;
}

const initialState = {
    counter: 0
}
const _counterReducer = createReducer(
    initialState,
    on(increment, (state, {value}) => {
        return {
            ...state,
            counter: state.counter + value
        }
    }),
    on(decrement, (state, {value}) => {
        return {
            ...state,
            counter: state.counter - value
        }
    })
);

export function  counterReducer(state: ICounter = initialState, action: Action) {
    return _counterReducer(state, action);
}