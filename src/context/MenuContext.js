import axios from 'axios';
import React, { useReducer } from 'react';
import { API } from '../helpers/helpers';



export const menuContext = React.createContext()

const INIT_STATE = {
    menu: [],
    edited: null,
}

const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "GET_MENU":
            return { ...state, menu: action.payload }
        case "EDIT_MENU":
            return { ...state, edited: action.payload }
        default: return state
    }
}
const ContextMenuProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE)
    
    const getMenu = async (url) => {
        
        // console.log(url)
        let data = {}
        if(url){
            await axios(`${API}${url}`).then(res => data = res.data)
        } else {
            await axios(`${API}`).then(res => data = res.data)
        }
        
        dispatch({
            type: "GET_MENU",
            payload: data
        })
    }
    
    const addMenu = async (newMenu) => {
        await axios.post(`${API}`, newMenu)
        getMenu()
    }

    const delMenu = async (id) => {
        await axios.delete(`${API}/${id}`)
        getMenu()
    }
    const editMenu = async (id) => {
        const { data } = await axios(`${API}/${id}`)
        dispatch({
            type: "EDIT_MENU",
            payload: data
        })
    }
    const saveEdit = async (newMenu) => {
        await axios.patch(`${API}/${newMenu.id}`, newMenu)
        getMenu()
    }

    return (
        <menuContext.Provider value={{
            menu: state.menu,
            edited: state.edited,
            getMenu,
            addMenu,
            delMenu,
            editMenu,
            saveEdit,
        }}>
            {children}
        </menuContext.Provider>
    );
};

export default ContextMenuProvider;