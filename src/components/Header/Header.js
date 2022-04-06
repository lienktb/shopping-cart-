import React, { useContext } from "react";
import './Header.css'
import Cart from './Cart'
import { actionProducts, ProductContext } from "../../store";
export default function Header() {
  const [state, dispatch] = useContext(ProductContext);
  const {search} = state;
  const handleSearch = (e)=>{
    dispatch(actionProducts.setSearch(e.target.value))
    dispatch(actionProducts.getProduct({dispatch, search}));
  }
  return (
    <div className="header">
    
        <nav className="navbar navbar-expand-lg ">
          <div className="container">
            <a className="navbar-brand text-green px-5" href="#">
              Veggy
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbar"
              aria-controls="navbar"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbar">
              <form className="d-flex ms-5">
                <input
                  className="form-control"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  style={{width: '350px'}}
                  value={search}
                  onChange={(e)=>handleSearch(e)}
                />
                <button className="btn btn-success px-5 text-white" type="submit">
                <i className="fa-solid fa-magnifying-glass"></i>
                </button>
              </form>
            </div>

            <div className="float-end">
                <Cart></Cart>
            </div>
          </div>
        </nav>
        
    </div>
  );
}
