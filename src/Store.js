import { configureStore } from "@reduxjs/toolkit";
import omit from "lodash/omit";

const initialState = { items: {} };

const ADD_TO_CART = "ADD_TO_CART";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";

export function addToCart(product) {
    return {
        type: ADD_TO_CART,
        payload: product
    }
}
export function removeFromCart(product) {
    return {
        type: REMOVE_FROM_CART,
        payload: product
    }
}


function cartReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TO_CART": {
      const product = action.payload;
      if (state.items[product.id]) {
        return {
          ...state,
          items: {
            ...state.items,
            [product.id]: {
              ...state.items[product.id],
              quantity: state.items[product.id].quantity + 1,
            },
          },
        };
      } else {
        return {
          ...state,
          items: {
            ...state.items,
            [product.id]: {
              ...product,
              quantity: 1,
            },
          },
        };
      }
    }
    case "REMOVE_FROM_CART": {
      const product = action.payload;
      if (state.items[product.id].quantity <= 1) {
        return {
          ...state,
          items: omit(state.items, [product.id]),
        };
      } else {
        return {
          ...state,
          items: {
            ...state.items,
            [product.id]: {
              ...state.items[product.id],
              quantity: state.items[product.id].quantity - 1,
            },
          },
        };
      }
    }
    default:
      return state;
  }
}

const store = configureStore({
  reducer: cartReducer,
});


export default store;

// action is an object

// type
// payload