import { createAction, props } from "@ngrx/store";

export const increment = createAction('increment', props<{value: number}>());
export const decrement = createAction('decrement', props<{value: number}>());