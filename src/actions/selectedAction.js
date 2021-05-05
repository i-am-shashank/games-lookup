export const select = (obj) => (dispatch) => {
  dispatch({
    type: "SELECT",
    payload: {
      selected: obj,
    },
  });
};
