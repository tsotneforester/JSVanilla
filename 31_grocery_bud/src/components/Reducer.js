export const defaultState = {
  data: [],
  alertShow: false,
  alertMsg: "-----",
  alertType: "add",
};

export const reducer = (state, action) => {
  if (action.type === "ADD_VALUE") {
    const newPeople = [...state.data, action.load];

    return {
      ...state,
      data: newPeople,
      alertShow: true,
      alertMsg: "Item Added To The List",
      alertType: "add",
    };
  }

  if (action.type === "REMOVE_VALUE") {
    const newPeople = state.data.filter((task) => {
      return task.id !== action.load;
    });
    return {
      ...state,
      data: newPeople,
      alertShow: true,
      alertMsg: "Item Removed",
      alertType: "remove",
    };
  }

  if (action.type === "REMOVE_ALL") {
    return {
      ...state,
      data: [],
      alertShow: true,
      alertMsg: "Empty List",
      alertType: "remove",
    };
  }

  if (action.type === "EDIT_VALUE") {
    // let filtered = state.data.filter((task) => {
    //   return task.id !== action.load;
    // });
    const newPeople = action.load;

    return {
      ...state,
      data: newPeople,
      alertShow: true,
      alertMsg: "Value Changed",
      alertType: "edit",
    };
  }

  if (action.type === "REMOVE_ALERT") {
    return {
      ...state,
      alertShow: false,
    };
  }
};
