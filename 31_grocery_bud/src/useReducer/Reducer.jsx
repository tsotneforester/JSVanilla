export const defaultState = {
  data: [],
  alert: { show: false, msg: "", type: "add" },
  activeID: false,
};

export const reducer = (state, action) => {
  if (action.type === "ADD_VALUE") {
    const newPeople = [...state.data, action.load];
    return {
      ...state,
      data: newPeople,
      alert: { show: true, msg: "Item Added To The List", type: "add" },
    };
  }

  if (action.type === "REMOVE_VALUE") {
    return {
      ...state,
      data: action.load,
      alert: { show: true, msg: "Item Removed", type: "remove" },
    };
  }

  if (action.type === "REMOVE_ALL") {
    return {
      ...state,
      data: [],
      alert: { show: true, msg: "Empty List", type: "remove" },
    };
  }

  if (action.type === "EDIT_VALUE") {
    return {
      ...state,
      data: action.load,
      alert: { show: true, msg: "Value Changed", type: "edit" },
      activeID: false,
    };
  }

  if (action.type === "SELECT_VALUE") {
    return {
      ...state,
      activeID: action.load,
    };
  }

  if (action.type === "REMOVE_ALERT") {
    return {
      ...state,
      alert: { show: false, msg: "", type: "" },
    };
  }
};
