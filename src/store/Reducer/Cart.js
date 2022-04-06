import {
  SET_OPEN,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  GET_CART,
  GET_CART_SUCCESS,
} from "../Constants/Cart";
import { getCart, addCart , deleteCart, editCart} from "../services/CartService";
const initState = {
  items: [],
  isOpen: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case SET_OPEN:
      //   console.log(state);
      return {
        ...state,
        isOpen: action.payload,
      };
    case ADD_TO_CART:
      let cartItems = null;
      const check = state.items.some((item) => item.id == action.payload.id);
      console.log(action.payload)
      if (check) {
        const items = state.items.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              quality: action.payload.quality + item.quality,
            };
          }
          return item;
        });
        cartItems = [...items];
        // console.log(action.payload)
        // state.items.map((item)=>{
        //   if(item.productID === action.payload.id){
        //     editCart({
        //       id: item.id,
        //   "productID": action.payload.id,
        //   "name": action.payload.name,
        //   "price": action.payload.price,
        //   "image": action.payload.image,
        //   "category": action.payload.category,
        //   "quality": action.payload.quality + item.quality,
        //     })
        //   }
        // })
      } else {
          cartItems = [...state.items, action.payload];
        // addCart({
        //   id: "",
        //   "productID": action.payload.id,
        //   "name": action.payload.name,
        //   "price": action.payload.price,
        //   "image": action.payload.image,
        //   "category": action.payload.category,
        //   "quality": action.payload.quality,
        // });
      }
    //   getCart(action.payload.dispatch);
      return {
        ...state,
        items: cartItems
      };
    case REMOVE_FROM_CART:
      // console.log(state.items);
      const items = state.items.filter((item) => item.id != action.payload);
      // deleteCart(action.payload);
    //   console.log(items);
      return {
        ...state,
        items
      };
    case GET_CART:
      // getCart(action.payload);
      console.log(action.payload);
      return {
        ...state,
      };
    case GET_CART_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        items: action.payload,
      };
    default:
      throw new Error("INVALID ACTION");
  }
};

export { initState };
export default reducer;
