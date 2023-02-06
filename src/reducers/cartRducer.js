export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_CART_ITEM":
      const itemInCartIndex = state.cart.findIndex(
        (item) => item.id === action.payload._id
      );
      if (state.cart.length === 0 || itemInCartIndex === -1) {
        return {
          ...state,
          cart: state.cart.concat({
            id: action.payload._id,
            productName: action.payload.productName,
            amount: 1,
            price: action.payload.price,
            image: action.payload.image,
          }),
        };
      } else {
        return {
          ...state,
          cart: state.cart.map((item, index) => {
            if (index !== itemInCartIndex) {
              return item;
            } else {
              return { ...item, amount: item.amount + 1 };
            }
          }),
        };
      }
    case "INCREMENT_CART_ITEM": {
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item.id === action.payload) {
            return { ...item, amount: item.amount + 1 };
          } else {
            return { ...item };
          }
        }),
      };
    }
    case "DECREMENT_CART_ITEM": {
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item.id === action.payload && item.amount > 0) {
            return { ...item, amount: item.amount - 1 };
          } else {
            return { ...item };
          }
        }),
      };
    }
    case "REMOVE_CART_ITEM": {
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    }
    case "RESET_CART": {
      return {
        ...state,
        cart: [],
        cartAmount: 0,
      };
    }
    case "CALC_CART_ITEMS": {
      return {
        ...state,
        cartAmount: state.cart.reduce((a, b) => a + b.amount, 0),
      };
    }
    default:
      return state;
  }
};
