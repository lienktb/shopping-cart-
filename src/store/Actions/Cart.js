import {SET_OPEN, ADD_TO_CART, REMOVE_FROM_CART, GET_CART_FAILED, GET_CART, DELETE_CART, EDIT_CART} from '../Constants/Cart'
export const setOpen = payload=>({
    type: SET_OPEN,
    payload
})

export const addToCart = (payload) => ({
    type: ADD_TO_CART,
    payload
  });
 
export const removeFromCart = payload =>({
    type: REMOVE_FROM_CART,
    payload
})

export const getCart = payload =>({
    type: GET_CART,
    payload
})

export const deleteCart = payload=>({
    type: DELETE_CART,
    payload
})

export const editCart = payload=>({
    type: EDIT_CART,
    payload
})