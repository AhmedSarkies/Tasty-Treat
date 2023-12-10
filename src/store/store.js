import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

import cartReducer from "./slices/cartSlice.js";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  middleware: [thunk],
});

export default store;
