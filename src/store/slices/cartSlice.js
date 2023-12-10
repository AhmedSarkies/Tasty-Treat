import { createSlice } from "@reduxjs/toolkit";

// Initial State
const initialState = {
  cart: [],
  totalAmount: 0,
  totalQuantity: 0,
};

// Total Amount & Local Storage Handler
const totalAmountLocalStorageHandler = (state) => {
  state.totalAmount = state.cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  localStorage.setItem("cartItems", JSON.stringify(state));
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
      totalAmountLocalStorageHandler(state);
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
      totalAmountLocalStorageHandler(state);
    },
    // Delete Item From Cart Reducer
    removeItemFromCart: (state, action) => {
      const id = action.payload;
      state.cart = state.cart.filter((item) => item.id !== id);
      state.totalQuantity--;
      totalAmountLocalStorageHandler(state);
    },
    // Delete Cart Reducer
    clearCart: () => {
      localStorage.removeItem("cartItems");
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
