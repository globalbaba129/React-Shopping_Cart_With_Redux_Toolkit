import { createSlice } from "@reduxjs/toolkit";
import { Data } from "../shop/shop_data.js";

const initialState = {
  cart: JSON.parse(localStorage.getItem('cart')) || [],
  items: Data,
  totalquantity: JSON.parse(localStorage.getItem('totalquantity')) || 0,
  totalprice: JSON.parse(localStorage.getItem('totalprice')) || 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const find = state.cart.findIndex((item) => item.id === action.payload.id);
      if (find >= 0) {
        state.cart[find].totalquantity += 1;
      } else {
        state.cart.push({ ...action.payload, totalquantity: 1 });
      }
      // Update totals
      state.totalquantity = state.cart.reduce((total, item) => total + item.totalquantity, 0);
      state.totalprice = state.cart.reduce((total, item) => total + item.price * item.totalquantity, 0);

      // Save to localStorage
      localStorage.setItem('cart', JSON.stringify(state.cart));
      localStorage.setItem('totalquantity', JSON.stringify(state.totalquantity));
      localStorage.setItem('totalprice', JSON.stringify(state.totalprice));
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const find = state.cart.findIndex((item) => item.id === id);
      if (find >= 0) {
        state.cart[find].totalquantity = quantity;
      }
      // Update totals
      state.totalquantity = state.cart.reduce((total, item) => total + item.totalquantity, 0);
      state.totalprice = state.cart.reduce((total, item) => total + item.price * item.totalquantity, 0);

      // Save to localStorage
      localStorage.setItem('cart', JSON.stringify(state.cart));
      localStorage.setItem('totalquantity', JSON.stringify(state.totalquantity));
      localStorage.setItem('totalprice', JSON.stringify(state.totalprice));
    },
    removeItem: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
      // Update totals
      state.totalquantity = state.cart.reduce((total, item) => total + item.totalquantity, 0);
      state.totalprice = state.cart.reduce((total, item) => total + item.price * item.totalquantity, 0);

      // Save to localStorage
      localStorage.setItem('cart', JSON.stringify(state.cart));
      localStorage.setItem('totalquantity', JSON.stringify(state.totalquantity));
      localStorage.setItem('totalprice', JSON.stringify(state.totalprice));
    }
  },
});

export const { addToCart, updateQuantity, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
