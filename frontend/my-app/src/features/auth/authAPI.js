import axios from "axios";

const register = async (userData) => {
  const response = await axios.post("/users/registration", userData);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

const authAPI = {
  register,
};

export default authAPI;
