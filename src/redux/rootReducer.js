import { combineReducers } from "redux";
import { buyerReducer } from "./buyerReducer";
import { shopReducer } from "./shopReducer";

export const rootReducer = combineReducers({
    buyer: buyerReducer,
    shop: shopReducer
})