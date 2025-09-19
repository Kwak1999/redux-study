import {combineReducers} from "@reduxjs/toolkit";
import counter from "./counter";
// @ts-ignore
import todos from "./todos";
import posts from "./posts";

const rootReducer = combineReducers({
    counter,
    todos,
    posts
})

export type RootState = ReturnType<typeof rootReducer>;

// ⬇⬇⬇ 여기가 중요
export default rootReducer;