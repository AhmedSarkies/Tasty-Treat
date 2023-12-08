import { createSlice } from "@reduxjs/toolkit";

// Initial State
const initialState = {
  cart: [],
  totalAmount: 0,
  totalQuantity: 0,
};

// Total Amount Handler
const totalAmountHandler = (state) => {
  state.totalAmount = state.cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
};

// Cart Slice
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Load Cart Items Reducer
    loadCartItems: (state) => {
      const cartItems = JSON.parse(localStorage.getItem("cartItems"));
      if (cartItems) {
        state.cart = cartItems.cart;
        state.totalAmount = cartItems.totalAmount;
        state.totalQuantity = cartItems.totalQuantity;
      }
    },
    // Add To Cart Reducer
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.cart.find((item) => item.id === newItem.id);
      if (!existingItem) {
        state.cart.push(newItem);
        state.totalQuantity++;
      } else {
        existingItem.quantity += newItem.quantity;
      }
      totalAmountHandler(state);
      localStorage.setItem("cartItems", JSON.stringify(state));
    },
    // Delete From Cart Reducer
    deleteFromCart: (state, action) => {
      const id = action.payload;
      const existingItem = state.cart.find((item) => item.id === id);
      if (existingItem.quantity === 1) {
        state.cart = state.cart.filter((item) => item.id !== id);
        state.totalQuantity--;
      } else {
        existingItem.quantity--;
      }
      totalAmountHandler(state);
      localStorage.setItem("cartItems", JSON.stringify(state));
    },
    // Delete Item From Cart Reducer
    removeItemFromCart: (state, action) => {
      const id = action.payload;
      state.cart = state.cart.filter((item) => item.id !== id);
      state.totalQuantity--;
      totalAmountHandler(state);
      localStorage.setItem("cartItems", JSON.stringify(state));
    },
    // Delete Cart Reducer
    clearCart: () => {
      localStorage.setItem("cartItems", JSON.stringify(initialState));
      return initialState;
    },
  },
});

export const {
  loadCartItems,
  addToCart,
  deleteFromCart,
  removeItemFromCart,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
