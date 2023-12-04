import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, name, price, image } = action.payload;
      if (state[id]) {
        state[id].quantity += 1;
      } else {
        state[id] = {
          id,
          name,
          price,
          image,
          quantity: 1,
        };
      }
    },
    removeFromCart: (state, action) => {
      const { id } = action.payload;
      if (state[id].quantity === 1) {
        delete state[id];
      } else {
        state[id].quantity -= 1;
      }
    },
    clearCart: (state) => {
      return initialState;
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
