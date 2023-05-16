import { configureStore, createSlice } from '@reduxjs/toolkit';

const carItems =
  localStorage.getItem('items') !== null
    ? JSON.parse(localStorage.getItem('items'))
    : [];

const totalQuantity =
  localStorage.getItem('totalQuantity') !== null
    ? JSON.parse(localStorage.getItem('totalQuantity'))
    : 0;

const setItemFunction = (item, totalQuantity) => {
  localStorage.setItem('items', JSON.stringify(item));
  localStorage.setItem('totalQuantity', JSON.stringify(totalQuantity));
};

const CartSlice = createSlice({
  name: 'Cart',
  initialState: {
    items: carItems,
    totalQuantity: totalQuantity,
  },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);
      state.totalQuantity++;

      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          title: newItem.title,
          type: newItem.type,
          image: newItem.image,
          quantity: 1,
        });
      } else {
        existingItem.quantity++;
      }

      setItemFunction(
        state.items.map(item => item),
        state.totalQuantity
      );
    },
    deleteItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      state.totalQuantity--;

      if (existingItem.quantity === 1) {
        state.items = state.items.filter(item => item.id !== id);
      } else {
        existingItem.quantity--;
      }

      setItemFunction(
        state.items.map(item => item),
        state.totalQuantity
      );
    },
    removeItemCardfromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      state.totalQuantity -= existingItem.quantity;
      state.items = state.items.filter(item => item.id !== id);
      setItemFunction(
        state.items.map(item => item),
        state.totalQuantity
      );
    },
    emptyCart(state) {
      state.items = [];
      state.totalQuantity = 0;
      setItemFunction(
        state.items.map(item => item),
        state.totalQuantity
      );
    },
  },
});

const store = configureStore({
  reducer: CartSlice.reducer,
});

export const cartActions = CartSlice.actions;
export default store;
