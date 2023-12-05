import { configureStore } from '@reduxjs/toolkit';
import cartReducer from "../Reducers/CartSlice"
import prductsReducer from "../Reducers/ProductSlice"
import checkoutReducer from "../Reducers/CheckoutSlice"
export default configureStore({
  reducer: {
  products : prductsReducer,
cart : cartReducer,
checkout : checkoutReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    }),
});