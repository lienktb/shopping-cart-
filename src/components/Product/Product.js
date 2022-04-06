import React, { useContext, useState } from "react";
import { actionCarts, CartContext } from "../../store";
import "./Product.css";
export default function Product({ product }) {
  const [state, dispatch] = useContext(CartContext);
  const [quality, setQuality] = useState(1);

  const handleAddToCart = ()=>{
    const newProduct = {...product, quality: quality};
    dispatch(actionCarts.addToCart(newProduct))
    // dispatch(actionCarts.getCart(dispatch));
  }
  return (
    <div className="col-8 col-md-3">
      <div className="card m-2 border-0 text-center hover-effect p-3">
        <div className="img-hover">
          <img src={product.image} className="card-img-top " alt="..." />
        </div>
        <div className="product-name">
          <p className="card-text">{product.name}</p>
          <h5 className="card-title text-muted">{product.price}</h5>
        </div>
        <div className="d-flex justify-content-center pb-4 pt-2">
          <a className="increment" onClick={() => setQuality(quality - 1)}>
            -
          </a>
          <input
            className="quality mx-3 text-center"
            type="number"
            value={quality < 0 ? setQuality(1) : quality}
            onChange={(e) => setQuality(parseInt(e.target.value))}
          ></input>
          <a className="decrement" onClick={() => setQuality(quality + 1)}>
            +
          </a>
        </div>
        <button
          className="btn btn-hover btn-success w-100"
          onClick={handleAddToCart}
        >
          ADD TO CART
        </button>
      </div>
    </div>
  );
}
