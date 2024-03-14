import { Link } from "react-router-dom";
import './product.css'


function Product({ product }) {
  // console.log(product?.id);
  return (
    <>
      <Link to={`/products/${product?.id}`} key={product?.id} className=" col-lg-3 col-md-4 col-6 text-decoration-none">
        <div className="product-item py-2 justify-content-center ">
          <div className="card my-card d-flex justify-content-center">
            <div className="category">
              {product?.category}
            </div>
            <div className="image-card py-2">
              <img src={product.images[0]} className="rounded mx-auto d-block img-fluid imag-cover" alt="" />
            </div>
            <div className="product-info py-2 d-flex justify-content-center">
              <span>Brand : </span>
              <span className="fw-bold"> {product.brand}</span>
            </div>
            <div className="title py-2 d-flex justify-content-center">
              {product.title}
            </div>
            <div className="price d-flex justify-content-center">
              <span className="old-price px-2">  {product.price}</span>
              <span className="new-price px-2">  {product.discount.toFixed(2)}</span>
              <span className="discount px-2">  (%off)</span>
            </div>
          </div>
        </div>
      </Link>
    </>
  )
}

export default Product;