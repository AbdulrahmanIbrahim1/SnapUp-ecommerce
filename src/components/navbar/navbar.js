// import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import './navbar.css'
import { setSidebarOn } from "../../store/sidebarSlice";
import { useDispatch, useSelector } from "react-redux";
// import { getSidebarStatus } from "../../store/sidebarSlice";
import { fetchAsyncCategories, getAllCategories } from "../../store/categorySlice";
import { useEffect } from "react";
import { getAllCarts, getCartItemCount, getCartTotal } from "../../store/cartSlice";
import CartModal from "../CartModal/CartModal";

function NavbarApp() {
  const carts = useSelector(getAllCarts)
  const itemCount = useSelector(getCartItemCount)
  // console.log(itemCount);
  const categories = useSelector(getAllCategories)
  const dispatch = useDispatch()
  // const status = useSelector(getSidebarStatus)
  // console.log(status);
  useEffect(() => {
    dispatch(fetchAsyncCategories())
  }, [dispatch])
  useEffect(() => {
    dispatch(getCartTotal())
  }, [carts])
  return (
    <>
      {/* <Navbar> */}
      {/* <div className="navbar-cont d-flex align-items-center d-flex justify-content-center"> */}
      <div className="left-navbar ">
        <div className="navbar-brand d-flex align-items-center ">
          <div className="sidebar-show text-white fs-3">
            <button className="sidebar-show-btn  text-white mx-1" onClick={() => dispatch(setSidebarOn())}>
              <i className="fa-solid fa-bars"></i>
            </button>
            <Link to="/" className="nav-bramd text-white text-decoration-none" >
              <span className="barnd-ico"><i className="fa-solid fa-bag-shopping mx-1"></i></span>
              <span className="nav-br-txt fs-2 mx-1">
                <span className="fw-bold text-de ">Snap</span>Up
              </span>
            </Link>
          </div>
        </div>
      </div>

      <div className="cont-center flex-fill d-flex flex-column ">
        <div className="search-box  flex-fill">
          <div className="input-group ">
            <input type="text" className="form-control" placeholder="Search Your preferred item here" aria-label="Recipient's username" aria-describedby="button-addon2" />
            <Link to="/" className="btn btn-outline-secondary" type="button" id="button-addon2">
              <i className="fa-solid fa-magnifying-glass"></i>
            </Link>
          </div>
        </div>
        <ul className="cat d-flex text-uppercase" >
          {
            categories.slice(0, 8).map((cat, idx) => {
              return (
                <li className="nav-item navbar-nav mx-2" key={idx}>
                  <Link to={`category/${cat}`} className="text-decoration-none text-white text-uppercase" >{cat.replace("-", " ")} </Link>
                </li>
              )
            })
          }
        </ul>
      </div>
      <div className="cart-nav">
        <Link to={"/cart"} className=" text-decoration-none">
          <i className=" cart-ico fa-solid fa-cart-arrow-down"></i>
          <div className="cart-value">{itemCount}</div>
          <CartModal carts={carts} />
        </Link>
      </div>
      {/* </div> */}
      {/* </Navbar> */}
    </>
  )
}
export default NavbarApp;