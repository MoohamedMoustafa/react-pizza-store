import { createSelector, createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
  // cart: [
  //   {
  //     pizzaId: 12,
  //     name: 'Mediterranean',
  //     quantity: 2,
  //     unitPrice: 16,
  //     totalPrice: 32,
  //   },
  // ],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const sItemExist = state.cart.find(
        (item) => item.pizzaId === action.payload.pizzaId,
      );
      if (sItemExist) return;

      state.cart.push(action.payload);
    },
    clearCart(state) {
      state.cart = [];
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;
    },
  },
});

export default cartSlice.reducer;
export const {
  addItem,
  clearCart,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
} = cartSlice.actions;

// export const getTotalCartItems = (store) =>
//   store.cart.cart.reduce((acc, item) => acc + item.quantity, 0);

// export const getTotalCartPrice = (store) => {
//   console.log('selector ran');
//   return store.cart.cart.reduce((acc, item) => acc + item.totalPrice, 0);
// };

// export const getTotalCartItems = createSelector(
//   [(state) => state.cart.cart],
//   (cart) => {
//     console.log('memoized selector ran');
//     return cart.reduce((acc, item) => acc + item.quantity, 0);
//   },
// );

const cartSelector = (state) => state.cart.cart;
const createCartTotalSelector = (key) =>
  createSelector([cartSelector], (cart) =>
    cart.reduce((acc, item) => acc + item[key], 0),
  );

export const getTotalCartItems = createCartTotalSelector('quantity');
export const getTotalCartPrice = createCartTotalSelector('totalPrice');
