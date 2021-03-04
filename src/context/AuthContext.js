import React, { useReducer } from 'react';
import axios from 'axios';
import { API_LOG} from '../helpers/helpers';
import { getToken, setTokens } from '../jwt/helpers';

export const authContext = React.createContext(null);

const INIT_STATE = {
    currentUser: null
}

const reducer = (state=INIT_STATE, action) => {
    switch(action.type){
        case "LOGIN_USER":
            return {
                ...state,
                currentUser: action.payload
            }
        case "LOGOUT_USER":
            return {
                ...state,
                currentUser: null
            }
        default: return state
    }
}

const AuthContextProvider = (props) => {

    const [state, dispatch] = useReducer(reducer, INIT_STATE);

    const registerUser = async (email, password) => {
        try {
            const { data } = await axios.post(`${API_LOG}/account/register/`, {
                email,
                password,
                password_confirm: password
            })
        } catch (error) {
        }
    }

    const loginUser = async (email, password) => {
        try {
            const { data } = await axios.post(`${API_LOG}/account/login/`, {
                email,
                password,
            });
            setTokens(data);
        } catch (error) {
            throw new Error(error);
        }
    }

    return (
        <authContext.Provider value={{
            user: state.currentUser,
            registerUser,
            loginUser
        }}>
            {props.children}
        </authContext.Provider>
    )
}

export default AuthContextProvider;