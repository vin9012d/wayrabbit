// NOTE: use this store variable to create a store.
import { applyMiddleware, legacy_createStore } from "redux";
import { combineReducers } from "redux";
import { reducer as Appreducer } from "./appreducer/reducer";
import { reducer as Authreducer } from "./authreducer/reducer";
import thunk from "redux-thunk";


const rootReducer=combineReducers({Appreducer,Authreducer})

const store = legacy_createStore(rootReducer,applyMiddleware(thunk));

export { store };

