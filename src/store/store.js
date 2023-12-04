import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import thunk from "redux-thunk";

import cartReducer from "./slices/cartSlice.js";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  middleware: [thunk, logger],
});

export default store;
