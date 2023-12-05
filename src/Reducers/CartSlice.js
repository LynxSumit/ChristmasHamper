import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: []
  
};

export const CartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    AddToCart: (state, action) => {
      state.data.push(action.payload.value)
    },
    DeleteFromCart: (state, action) => {
     const {value} = action.payload;
     
    },
  
  },
});

// this is for dispatch
export const { AddToCart } =
  CartSlice.actions;

// this is for configureStore
export default CartSlice.reducer;
