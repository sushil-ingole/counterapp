import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ICounter } from "./counter.reducer";

const getCounterState = createFeatureSelector<ICounter>('counter');

export const getCounter = createSelector(getCounterState, (state) => {return state.counter});