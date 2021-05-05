const selectedGameReducer = (state = {}, action) => {
  switch (action.type) {
    case "SELECT":
      return action.payload.selected;

    default:
      return { ...state };
  }
};

export default selectedGameReducer;
