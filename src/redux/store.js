import { createStore, combineReducers } from "redux";
import { movieReducer } from "./moviestore/reducer";

const rootStore = combineReducers({
    moviealldata: movieReducer,
})

export const store = createStore(rootStore);