import { combineReducers } from "redux";
import { filtersReducer } from "./filters/filters-reducer";
import { playersReducer } from "./players/players-reducer";

export const allReducers = combineReducers({filtersList: filtersReducer, playersList: playersReducer});