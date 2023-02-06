export const userReducer = (state, action) => {
  switch (action.type) {
    case "SIGN_IN_USER":
      return {
        ...action.payload,
      };
    case "SIGN_OUT_USER":
      return {};
    default:
      return state;
  }
};
