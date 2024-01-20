import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: 0,
};

export const productDetailsSlice = createSlice({
  name: "productDetails",
  initialState,
  reducers: {
    addToDetails: (state, action) => {
      state.product = action.payload;
      //   console.log("OK");
    },
  },
});

//   extraReducers: (builder) => {
//     builder.addCase(addToCart, (state, action) => {
//       state.cartItems.push(action.payload);
//     });
//   },

export default productDetailsSlice.reducer;
export const { addToDetails } = productDetailsSlice.actions;
