const INITIAL_STATE = {
  id: 0,
  username: "",
  fullname: "",
  password: "",
  phone: "",
  email: "",
  role: "",
  isDelete: "",
};

export const usersReducer = (state = INITIAL_STATE, action) => {
  console.log("Data dari action --> ", action);
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return { ...state, ...action.payload };
    case "LOGOUT":
      return INITIAL_STATE;
    default:
      return state;
  }
};
