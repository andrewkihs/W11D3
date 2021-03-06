import { combineReducers } from "redux";
import entitiesReducer from "./entities_reducer";

const uiReducer = () => ({});

const rootReducer = combineReducers({
  entities: entitiesReducer,
  uiReducer,
});

export default rootReducer;
