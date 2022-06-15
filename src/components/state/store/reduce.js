const initState = {
  valueCell: "",
  isNext: true,
};

function reducer(state, action) {
  switch (action.type) {
    case "SETVALUEGAME":
      return {
        ...state,
        valueCell: "X",
      };

    default:
      throw new Error("type k ton tai");
  }
}

export { initState };
export default reducer;
