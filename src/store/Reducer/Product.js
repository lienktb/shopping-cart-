import { ADD_QUALITY, GET_PRODUCT, SUB_QUALITY, GET_SUCESS, SET_SEARCH } from "../Constants/Product";
import {getProduct} from '../services/ProductService'
const initState = {
    quality: 1,
    products: [],
    isLoading: true,
    search: ''
}

const reducer = (state, action) => {
    switch (action.type){
        case ADD_QUALITY: 
            return {
                ...state,
                quality: action.payload - 1
            }
        case SUB_QUALITY:
            return{
                ...state,
                quality: action.payload + 1
            }
        case GET_PRODUCT:
            getProduct(action.payload.dispatch, action.payload.search)
            // console.log(action.payload)
            return{
                ...state,
                isLoading: true
            }
        case GET_SUCESS:
            // console.log(action.payload)
            return{
                ...state,
                products: action.payload
            }
        case SET_SEARCH:
            // console.log(action.payload)
            
            return{
                ...state,
                search: action.payload
            }
        
        default:
            throw new Error("INVALID ACTION");
        
    }
}

export {initState}
export default reducer;