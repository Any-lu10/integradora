import { configureStore } from '@reduxjs/toolkit';

const initialState = { cart: { items: [] } };

const rootReducer = (state = initialState, action) => {
  if (action.type === 'ADD_TO_CART') {
    return { ...state, cart: { items: [...state.cart.items, action.payload] } };
  }
  return state;
};

export const store = configureStore({ reducer: rootReducer });