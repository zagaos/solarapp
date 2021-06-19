import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";

import {
    GET_ERRORS,
    SET_CURRENT_USER,
    USER_LOADING
} from "./types";

//Register User
export const registerUser = (userData, history) => dispatch => {
    axios
        .post("/api/users/register", userData)
        .then(res => history.push("/login"))
        //re-direct to login on successful register
        .catch(err => 
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
            );
};

// Login - get user token
export const loginUser = userData =>
dispatch => {
    axios
        .post("/api/users/login", userData)
        .then(res => {
            // save to localStorage

            // set token to localStorage
            const { token } = res.data;
            localStorage.setItem("jwtToken", token);

            // set token to Auth header
            setAuthToken(token);
            //decode token to get user data
            const decodedToken = jwt_decode(token);
            // set current user
            dispatch(setCurrentUser(decodedToken));
        })
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};

// Set logged in user
export const setCurrentUser = decodedToken => {
    return {
        type: SET_CURRENT_USER,
        payload: decodedToken
    };
};

// User loading
export const setUserLoading = () =>{
    return {
        type: USER_LOADING
    };
};

// Log user out

export const logoutUser = () => dispatch =>
{
    //remove token from local storage
    localStorage.removeItem("jwtToken");
    // Remove auth header for future requests
    setAuthToken(false);
    //set current user to empty object which will set isAuthenticated to false
    dispatch(setCurrentUser({}));
};