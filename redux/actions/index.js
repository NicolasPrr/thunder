//User actions
export const change = user_info => ({
  type: "change",
  user_info
});
export function clean() {
  return {
    type: "clean"
  };
}
//GPS actions

export const add = name_number => ({
  type: "add",
  name_number
});
export const remove = index => (
  {
  type: "remove",
  index
});
export const reset = () => ({
  type: "reset"
});

//Index reducer
export const setIndex = index => ({
  type: "setIndex",
  index
});
