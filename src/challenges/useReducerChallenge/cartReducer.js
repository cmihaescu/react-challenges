export const cartReducer = (state, action) => {
  switch (action.type) {
    case "add":
      console.log("add triggered");
      return [...state, action.payload];
    case "remove":
      console.log("remove triggered");
      return state.filter((product) => product.id !== action.payload.id);
    case "save":
      console.log("save triggered");
      return state.map((product) => {
        if (product.id === action.payload.id) {
          return {
            ...action.payload,
            saved: true,
          };
        }
      });
    default:
      return [];
  }
};
