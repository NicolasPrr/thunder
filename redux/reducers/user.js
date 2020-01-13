//Reducer para informacion del usuario
const initData = {
  tel: "N.A",
  emer: "N.A"
};

export default function(state = initData, action) {
  // console.log("\nSTATEUSER: ¨*************************\n", state);
  switch (action.type) {
    case "change":
      return {
        ...state,
        tel: action.user_info.tel,
        emer: action.user_info.emer
      };
    case "clean":
      return {
        ...state,
        user: initData
      };
    default:
      return state;
  }
}
