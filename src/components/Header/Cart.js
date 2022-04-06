import React, { useContext, useEffect } from "react";
import { CartContext, actionCarts } from "../../store";

// import './Header.css'
export default function Cart() {
  const [state, dispatch] = useContext(CartContext);
  const { isOpen, items } = state;
  
  useEffect(()=>{
    dispatch(actionCarts.getCart(dispatch))
  },[])
  const total = items.map(item=> item.quality*item.price).reduce((pre, cur)=> pre+cur,0)
  
  const handleRemove = (id)=>{
    dispatch(actionCarts.removeFromCart(id))
    dispatch(actionCarts.getCart(dispatch))
    
  }
  return (
    <div className="cart d-flex text-green">
      <table>
        <tbody>
          <tr>
            <td>No. of items</td>
            <td className="px-2">:   </td>
            <td className="fw-bold">{items.length}</td>
          </tr>
          <tr>
            <td>Sub Total</td>
            <td className="px-2">:   </td>
            <td className="fw-bold">{total}</td>
          </tr>
        </tbody>
      </table>

      <i
        className="fa-solid fa-cart-shopping  ms-3 hover-btn"
        onClick={() => dispatch(actionCarts.setOpen(!isOpen))}
      ></i>

      {isOpen && (
        <div className="cart-detail border" style={{ width: "22rem" }}>
          <ul className="cart-list">
            {items.length>0 ? items.map(item=>{
              return <li className="cart-item d-flex mb-3" key={item.id}>
              <img src={item.image}></img>
              <div className="product-info">
                <p className="text-muted">{item.name}</p>
                <p className="text-muted fw-bold">{item.price}</p>
              </div>
              <div className="product-total px-2">
              <p className="text-muted">{item.quality} No.</p>
                <p className="fw-bold">{item.quality*item.price}</p>
              </div>
              <button className="btn .hover-btn" onClick={()=>handleRemove(item.id)}>x</button>
            </li>
            }): <div className="text-center p-5">"Cart Empty"</div>}
          </ul>
          <button className="btn btn-warning text-white w-100">CHECK OUT</button>

        </div>
      )}
    </div>
  );
}
