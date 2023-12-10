import api from "../../api/axiosConfig";

const API_URL = "/api/v1/users";

// Register user
const register = async (userData) => {
    const response = await api.post(API_URL + "/signup", userData)


    // when using axios, the payload is in the data of the response
    if(response.data){
        localStorage.setItem("user", JSON.stringify(response.data))
    }

    return response.data;
}

// Login user
const login = async (userData) => {
    const response = await api.post(API_URL + "/login", userData)

    if(response.data){
        localStorage.setItem("user", JSON.stringify(response.data))
    }

    return response.data
}

// Logout user
const logout = () => {
    localStorage.removeItem("user")
}

const authService = {
    register,
    logout,
    login
}
export default authService;