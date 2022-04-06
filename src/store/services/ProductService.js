import {GET_SUCESS} from '../Constants/Product'
const getProduct = (dispatch, search) =>{
    // console.log(search);
     fetch(`https://res.cloudinary.com/sivadass/raw/upload/v1535817394/json/products.json?q=${search}`)
        .then(response => response.json())
        .then(data => {
            dispatch({ type: GET_SUCESS, payload: data });
        })
        .catch(error => error)
}


export {getProduct}