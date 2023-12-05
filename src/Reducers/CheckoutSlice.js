import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {
    PersonalDetails : {
        firstName : "",
        lastName : "",
        email : "", 
        phone : "",

    },
    ShippingDetails  : {
        address : "",
        city : "",
        country : "",
        zipCode : "",

    }
  },
  
};

export const CheckoutSlice = createSlice({
  name: "Checkout",
  initialState,
  reducers: {
    setCheckoutForm: (state, action) => {
      state.data = action.payload.value;
    },
  
  },
});

// this is for dispatch
export const { setCheckoutForm } =
CheckoutSlice.actions;

// this is for configureStore
export default CheckoutSlice.reducer;
