import { createStore, combineReducers, compose } from "redux";
// import thunk from "redux-thunk";

import dictionary from "./modules/dictionary";

// const middlewares = [thunk];

const rootReducer = combineReducers({ dictionary });
//({bucket}) == ({bucket : bucket})

// const enhancer = applyMiddleware(...middlewares);

const store = createStore(rootReducer);

export default store;
