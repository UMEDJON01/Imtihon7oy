import { createSlice } from "@reduxjs/toolkit";
const basketSlice = createSlice({
  name: "basket",
  initialState: {
    products: [],
  },
  reducers: {
    addToBasket: (state, action) => {
      let copied = JSON.parse(JSON.stringify(state.products));
      copied.push(action.payload);
      state.products = copied;
    },
  },
});
export const { addToBasket } = basketSlice.actions;
export default basketSlice.reducer;
