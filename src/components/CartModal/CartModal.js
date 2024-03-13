import { shopping_cart } from "../../utils/images";
import './cartmodal.css'


function CartModal({ carts }) {
  return (
    <>
      <div className="cart-modal">
        <h5 className="c-m-title fw-normal " key={"000"}>Recently Added Products</h5>
        {
          (carts.length > 0) ? (<div className="cart-list py-2 ">
            {
              carts.map((cart) => {
                return (
                  <div className="cart-list-item my-2 py-4 flex-row d-flex justify-content-around align-items-center" key={cart.id}>
                    <div className="c-l-i-img">
                      <img src={cart?.thumbnail} className="img-fluid" alt="" />
                    </div>
                    <div className="c-l-i-title">
                      {cart.title}
                    </div>
                    <div className="c-l-i-price text-orange mx-2 ">
                      {cart.price}$
                    </div>
                  </div>
                )
              })
            }
            <div className="btn bg-oragne">
              View My Shopping Cart
            </div>
          </div>) : (
            <div>
              <img src={shopping_cart} alt="" className="img-fluid empty-img" />
              <h6 className="text-center">No Products Yet</h6>
            </div>
          )
        }
      </div>
    </>
  )
}
export default CartModal;