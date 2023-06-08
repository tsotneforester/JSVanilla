export default function reducer(state, action) {
  //state = initialState
  if (action.type === "calculate") {
    return {
      ...state,
      data: state.data,
      cart: countify(state.data)[0],
      total: countify(state.data)[1],
    };
  }

  if (action.type === "clear") {
    return {
      ...state,
      data: [],
      clear: true,
    };
  }

  if (action.type === "remove") {
    let filteredData = state.data.filter((item) => {
      return item.id !== action.id;
    });
    if (filteredData.length === 0) {
      return {
        ...state,
        data: [],
        clear: true,
      };
    } else {
      return {
        ...state,
        data: filteredData,
        cart: countify(filteredData)[0],
        total: countify(filteredData)[1],
      };
    }
  }

  if (action.type === "change") {
    let inputValue = action.value;

    if (Number(inputValue) === 0) {
      let filteredData = state.data.filter((item) => {
        return item.id !== action.id;
      });
      if (filteredData.length === 0) {
        return {
          ...state,
          data: [],
          clear: true,
        };
      } else {
        return {
          ...state,
          data: filteredData,
          cart: countify(filteredData)[0],
          total: countify(filteredData)[1],
        };
      }
    }

    let newData = [...state.data];

    let index = newData.findIndex((e) => e.id === action.id);
    newData[index].amount = inputValue * 1;

    return {
      data: newData,
      clear: false,
      cart: countify(newData)[0],
      total: countify(newData)[1],
    };
  }
}

function countify(arr) {
  let count = 0;
  let price = 0;

  for (let i = 0; i < arr.length; i++) {
    count += arr[i].amount;
    price += arr[i].price * arr[i].amount;
  }
  return [count, price];
}
