export const change = user_info => ({
  type: "change",
  user_info
});
export function clean() {
  return {
    type: "clean",
  };
}
