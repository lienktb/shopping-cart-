import React, { useEffect, useContext } from "react";
import Product from "../components/Product/Product";
import {ProductContext, actionProducts} from '../store'
export default function ProductContainer() {
  const [state, dispatch] = useContext(ProductContext);
  const {isLoading, products, search} = state;
  useEffect(()=>{
    dispatch(actionProducts.getProduct({dispatch, search}))
  },[search])
  return (
    <div className="product-container bg-light py-5">
      <div className="container">
        <div className="row">
        {products.map((product)=><Product product={product} key={product.id}></Product>)}
            
          
        </div>
      </div>
    </div>
  );
}
