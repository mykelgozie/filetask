import { createAction, props } from "@ngrx/store";
import { Register } from "../models/Register";

export const registerUser =  createAction('register', props<{ value : Register}>());