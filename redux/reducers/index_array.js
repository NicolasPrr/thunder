//Reducer para informacion del usuario
const initData = {
  index: null
};

export default function(state = initData, action) {
  switch (action.type) {
    case "setIndex":
      return {
        ...state,
        index: action.index
      };
    default:
      return state;
  }
}
