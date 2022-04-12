import {CHANGE_INPUT, ADD_ITEM, DELETE_ITEM, GET_LIST, GET_MY_LIST} from './actionTypes';
import axios from 'axios';

export const changeInputaction = (value) => ({
    type : CHANGE_INPUT,
    value
})

export const addItemaction = () => ({
    type : ADD_ITEM,
})

export const deleteItemaction = (index) => ({
    type : DELETE_ITEM,
    index
})

export const getListaction = (data) => ({
    type : GET_LIST,
    data
})

export const getTodoList = ()=> {
    return (dispatch)=> {
        axios.get('/user')
        .then((res) =>{
            const data = res.data;
            console.log(data);
            const action = getListaction(data);
            dispatch(action);
        })
    }
}

export const getMyListaction = () => ({
    type : GET_MY_LIST,
})