export const initialState = {
  cart: [],
  total: function () {
    if (!this.cart.length) return 0;
    return this.cart.reduce((acc, curr) => {
      return acc + Number(curr.price) * Number(curr.qty);
    }, 0);
  },
};

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "Update_QTY":
      return {
        ...state,
        cart: state.cart.map((elm) => {
          if (elm.id == payload.id) {
            elm.qty = payload.qty > 0 ? Number(payload.qty) : 1;
          }
          return elm;
        }),
      };

    case "Add_To_Cart":
      return {
        ...state,
        cart: state.cart.find((e) => e.id == payload.product.id)
          ? state.cart.map((elm) => {
              if (elm.id == payload.product.id) {
                elm.qty = Number(elm.qty) + 1;
              }
              return elm;
            })
          : [...state.cart, payload.product],
      };

    case "Remove_From_Cart":
      return {
        ...state,
        cart: state.cart.filter((elm) => elm.id != payload.id),
      };
    default: return state;
  }
};

export default cartReducer;
