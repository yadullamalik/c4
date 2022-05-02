import { ADD_ORDER, LOGIN, SORT } from "./actions";

const init = {
  login: [],
  order: [],
};

export const reducer = (store = init, { type, payload }) => {
  // console.log("store:", store);
  switch (type) {
    case LOGIN:
      return { ...store, login: payload };
    case ADD_ORDER:
      return { ...store, order: payload };
    case SORT:
      return {
        ...store,
        order: [...store.order].sort((a, b) =>
          a[payload] > b[payload] ? 1 : a[payload] < b[payload] ? -1 : 0
        ),
      };
    default:
      return store;
  }
};
