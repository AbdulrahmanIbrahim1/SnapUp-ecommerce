import { useParams } from "react-router-dom"
import Loader from "../loader/loader"
import { useDispatch, useSelector } from "react-redux";
import { fetchProductSingle, getSingleProducts, getSingleProductsStatus } from "../../store/productSlice";
import { useEffect, useState } from "react";
import { STATUS } from "../../utils/status";
import { Container, Row } from "react-bootstrap";
import './productSingle.css'
import { addToCart, getCartMessageStatus, setCartMessageOff, setCartMessageOn } from "../../store/cartSlice";
import Cartmessage from "../Cartmessage/Cartmessage";
import { formatPrice } from "../../utils/helpers";

function ProductSingle() {
  const { id } = useParams()
  const dispatch = useDispatch()
  const product = useSelector(getSingleProducts)
  const productSingleSatatus = useSelector(getSingleProductsStatus)
  const [quantity, setquantity] = useState(1)
  const cartMessageStatus = useSelector(getCartMessageStatus)

  useEffect(() => {
    dispatch(fetchProductSingle(id));
    if (cartMessageStatus) {
      setTimeout(() => {
        dispatch(setCartMessageOff())
      }, 2000)
    }
    console.log("cartMessageStatus ", cartMessageStatus);
  }, [cartMessageStatus])
  // console.log("single product is : ", product);
  let discount = (product.price) - (product.price * (product.discountPercentage / 100))
  if (productSingleSatatus === STATUS.LOADING) {
    return <Loader />
  }

  const increaseQuantity = () => {
    setquantity((prevQuantity) => {
      let tempQuantity = prevQuantity + 1;
      if (tempQuantity > product.stock) tempQuantity = product.stock;
      return tempQuantity;
    })
  }
  const decreaseQuantity = () => {
    setquantity((prevQuantity) => {
      let tempQuantity = prevQuantity - 1
      if (tempQuantity < 1) tempQuantity = 1;
      return tempQuantity;
    })
  }

  const addToCartHandle = (product) => {
    let discount = (product.price) - (product.price * (product.discountPercentage / 100))
    let totalPrice = quantity * discount
    dispatch(addToCart({ ...product, quantity: quantity, totalPrice, discountedPrice: discount }))
    dispatch(setCartMessageOn(true))
    console.log(cartMessageStatus);
  }

  return (<>
    <main className="py-4" >
      <div className="single-product">
        <Container >
          <div className="pro-cont">
            <Row className="product">
              <div className="images col-lg-6 col-md-">
                <div className="big-image">
                  <img className="img-fluid" src={product ? (product.images ? product.images[0] : "") : ""} alt="" />
                </div>
                <div className="small-images d-flex align-items-center ">
                  <div className="sm-img-item">
                    <img className="img-fluid" src={product ? (product.images ? product.images[1] : "") : ""} alt="" />
                  </div>
                  <div className="sm-img-item">
                    <img className="img-fluid" src={product ? (product.images ? product.images[2] : "") : ""} alt="" />
                  </div>
                  <div className="sm-img-item">
                    <img className="img-fluid" src={product ? (product.images ? product.images[3] : "") : ""} alt="" />
                  </div>
                  <div className="sm-img-item">
                    <img className="img-fluid" src={product ? (product.images ? product.images[4] : "") : ""} alt="" />
                  </div>
                </div>
              </div>
              <div className="cont-txt col-lg-6 col-md-">
                <div className="text py-5 d-flex justify-content-center align-items-center flex-column ">
                  <div className="pro-title">
                    <h2>{product.title}</h2>
                  </div>
                  <div className="desc text-black-50">
                    <p>{product.description}</p>
                  </div>
                  <div className="rates d-flex">
                    <div className="rating">
                      <span className="text-orange">Rating : </span>
                      <span className="mx-2">{product.rating}</span>
                    </div>
                    <div className='vert-line text-orange mx-2 px-2'>|</div>
                    <div className="brand">
                      <span className="text-orange">Brand : </span>
                      <span className="mx-2">{product.brand}</span>
                    </div>
                    <div className='vert-line text-orange mx-2 px-2'>|</div>
                    <div className="brand">
                      <span className="text-orange">Category : </span>
                      <span className="mx-2">{product?.category}</span>
                    </div>
                  </div>
                </div>
                <div className="price d-flex justify-content-center align-items-center flex-column">
                  <div className="d-flex my-3">
                    <div className="old-price mx-2 ">
                      {formatPrice(product.price)}
                    </div>
                    <span className="mx-2"> Inclusive of all taxes</span>
                  </div>
                  <div className="d-flex my-3 align-items-center">
                    <div className="new-pric fw-bold text-orange mx-2">
                      ${discount}
                    </div>
                    <div className="discount-0 fs-6 bg-orange mx-2">
                      {product.discountPercentage}%OFF
                    </div>
                  </div>
                </div>
                <div className="qty d-flex justify-content-center align-items-center">
                  <div className="qty-text mx-3">
                    Quantity :
                  </div>
                  <div className="qty-change py-4 d-flex justify-content-center">
                    <button className="qy-button minus " onClick={() => decreaseQuantity()}>
                      <i className="fa-solid fa-minus"></i>
                    </button>
                    <div className="qty-value px-4">{quantity}</div>
                    <button className="qy-button minus " onClick={() => increaseQuantity()}>
                      <i className="fa-solid fa-plus"></i>
                    </button>
                  </div>
                  {
                    (product.stock === 0) ? <div>
                      out of stock
                    </div> : ""
                  }
                </div>
                <div className="btns py-3 d-flex justify-content-center align-items-center">
                  <button className="add-to-cart btn" onClick={() => { addToCartHandle(product) }}>
                    <i className="fa-solid fa-cart-shopping"></i>
                    <span className="mx-2">Add to cart</span>
                  </button>
                  <button className="buy-now-btn btn mx-4 bg-orange">
                    <span className="btn-txt ">Buy Now</span>
                  </button>
                </div>
              </div>
            </Row>
          </div>
        </Container>
      </div>
      {cartMessageStatus && <Cartmessage />}
    </main>
  </>
  )
}
export default ProductSingle