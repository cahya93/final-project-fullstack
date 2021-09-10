const productlist = {
  listProduct: [],
};

const productReduce = (state = productlist, action) => {
  const { type, payload } = action;
  console.log(`payload`, payload);
  switch (type) {
    case "pruduct":
      return {
        ...state,
        listProduct: [...state.listProduct, payload.product],
      };

    default:
      return state;
  }
};

export default productReduce;
