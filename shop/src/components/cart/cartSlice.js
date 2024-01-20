import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalAmount: 0,
  itemExist: false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      // console.log(action.payload);
      const product = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (product) {
        console.log("Already Exist");
        state.itemExist = true;
      } else {
        let totalPrice = action.payload.price * action.payload.quantityValue;
        let data = { ...action.payload, totalPrice };
        state.cartItems.push(data);
        state.totalAmount += totalPrice;
      }
    },
    deleteToCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.totalAmount -= action.payload.totalPrice;
      //   0,
      //   state.totalAmount - action.payload.totalPrice
      // );
    },
    itemExistFalse: (state, action) => {
      state.itemExist = false;
    },
  },

  //   extraReducers: (builder) => {
  //     builder.addCase(addToCart, (state, action) => {
  //       state.cartItems.push(action.payload);
  //     });
  //   },
});

export default cartSlice.reducer;
export const { addToCart, deleteToCart, itemExistFalse } = cartSlice.actions;
