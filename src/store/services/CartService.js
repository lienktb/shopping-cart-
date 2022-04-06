// import {GET_CART_FAILED, GET_CART_SUCCESS} from '../Constants/Cart'
// export const getCart = (dispatch)=>{
//     fetch("https://res.cloudinary.com/sivadass/raw/upload/v1535817394/json/products.json")
//     .then(response=> response.json())
//     .then(data => {
//         dispatch({type: GET_CART_SUCCESS, payload: data})
//     })
//     .catch(err=> dispatch({type: GET_CART_FAILED, payload: err}));
// }

// export const addCart = (product)=>{
//     fetch("https://res.cloudinary.com/sivadass/raw/upload/v1535817394/json/products.json", {
//         method: "POST",
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(product)
//     })
//     .then(response => response.json())
//     .then(data=> data)
//     .catch(err=> err)
// }

// export const deleteCart = (id)=>{
//     fetch(`https://res.cloudinary.com/sivadass/raw/upload/v1535817394/json/products.json/${id}`, {
//         method: "DELETE"
//     }).then(response=> response.json())
//     .then(data=> data)
//     .catch(err=>err);
// }

// export const editCart = (cart)=>{
//     fetch(`https://res.cloudinary.com/sivadass/raw/upload/v1535817394/json/products.json/${cart.id}`, {
//         method: "PATCH",
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(cart)
//     })
//     .then(response => response.json())
//     .then(data=> data)
//     .catch(err=> err)
// }