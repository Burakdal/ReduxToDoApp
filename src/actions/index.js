import actionsTypes from '../actions/actionTypes';
export const addToDoAction=(text)=>({
    type:actionsTypes.ADD_TODO,
    payload:{
        text:text,
        id:Math.random()*10,

    }
});

export const ToggleToDoAction=(id)=>({
    type:actionsTypes.TOGGLE_TODO,
    payload:id
});