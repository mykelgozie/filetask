import { createReducer, on } from "@ngrx/store";
import { registerUser } from "../actions/register.action";
import { Register } from "../models/Register";
import { initialState } from "../state/register.state"


const _registerReducer = createReducer(initialState, on(registerUser, (state, action)  => {

    console.log(action);
   return { ...state, register : action.value, }
}));

export function registerReducer (state:any, action:any){

    return _registerReducer(state,action);
}