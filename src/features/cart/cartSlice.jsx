import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [], // each item: { id, name, price, image?, quantity }
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const payload = action.payload;
      const id = payload.id;
      const existing = state.items.find((i) => i.id === id);
      if (existing) {
        existing.quantity = (existing.quantity ?? 1) + (payload.quantity ?? 1);
      } else {
        state.items.push({ ...(payload), quantity: payload.quantity ?? 1 });
      }
    },
    removeFromCart: (state, action) => {
      const id = action.payload;
      state.items = state.items.filter((i) => i.id !== id);
    },
    incrementQuantity: (state, action) => {
      const id = action.payload;
      const it = state.items.find((i) => i.id === id);
      if (it) it.quantity = (it.quantity ?? 1) + 1;
    },
    decrementQuantity: (state, action) => {
      const id = action.payload;
      const it = state.items.find((i) => i.id === id);
      if (!it) return;
      if ((it.quantity ?? 1) > 1) {
        it.quantity = (it.quantity ?? 1) - 1;
      } else {
        state.items = state.items.filter((x) => x.id !== id);
      }
    },
    // optional: clearCart
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
