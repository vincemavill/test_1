import { createStore } from "redux";

import  reducers  from "./reducers/Reducers_A";

const store = createStore(
  reducers);

export default store;
