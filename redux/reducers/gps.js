//Reducer para informacion del usuario
const initData = {
  gps: []
};

export default function(state = initData, action) {
  switch (action.type) {
    case "add":
      let gps_add = [...state.gps];
      gps_add.push(action.name_number);
      return {
        ...state,
        gps: gps_add
      };
      return state;
    case "remove":
      let new_gps = [...state.gps];
      new_gps.splice(action.index, 1);
      return {
        ...state,
        gps: new_gps
      };
    case "reset":
      return {
        ...state,
        gps: []
      };
    default:
      return state;
  }
}
