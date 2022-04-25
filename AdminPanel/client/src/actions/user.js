import axios from "axios";
import {setUser} from "../reducers/userReducer";

export const registration = async (email, password, confirmPassword) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/auth/registration",
      {
        email,
        password,
        confirmPassword,
      }
    );
    alert(response.data.user.email);
  } catch (e) {
    alert(e);
  }
}

export const login = (email, password) => {
    return async dispatch => {
        try {
            const response = await axios.post(
                "http://localhost:5000/auth/login",
                {
                    email,
                    password,
                }
            );
            dispatch(setUser(response.data.user))
            localStorage.setItem('token', response.data.accessToken)
        } catch (e) {
            alert(e);
        }
    }
}

export const auth =  () => {
    return async dispatch => {
        try {
            const response = await axios.get(`http://localhost:5000/auth/auth`,
                {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}}
            )
            dispatch(setUser(response.data.user))

            localStorage.setItem('token', response.data.accessToken)
        } catch (e) {
            alert(e.response.data.message)
            localStorage.removeItem('token')
        }
    }
}
