export const loginAction = (data) => {
  console.log("Data dari component --> ", data);
  return {
    type: "LOGIN_SUCCESS",
    payload: data,
  };
};

export const logoutAction = (data) => {
  localStorage.removeItem("library_login");
  return {
    type: "LOGOUT",
  };
};
