import { useDispatch, useSelector } from "react-redux";
import { shopping_cart } from "../../utils/images";
import { clearCart, getAllCarts, removeFromCart, toggleCartQty } from "../../store/cartSlice";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import './cartPage.css'
import { formatPrice } from "../../utils/helpers";


function CartPage() {
  const dispatch = useDispatch()
  const carts = useSelector(getAllCarts)
  const { itemsCount, totalAmount } = useSelector((state) => state.cart)
  console.log("itemCount : ", itemsCount, "  totalAmount :  ", totalAmount);
  if (carts.length === 0) {
    return (
      <>
        <Container >
          <div className="empty-cart">
            <img src={shopping_cart} alt="" />
            <span >Your shopping cart is empty</span>
            <Link to={"/"} className="btn bg-orange mx-4"  >Go To shopping Now</Link>
          </div>
        </Container>
      </>
    )
  }

  return (
    <>
      <Container >

        <table className="table tabled-dark table-hover">

          <thead>
            <tr>
              <th>S.N</th>
              <th>Product</th>
              <th>UnitPrice</th>
              <th>Quantity</th>
              <th>totalPrice</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              carts.map((cart, index) => {
                return (
                  <tr key={cart.id}>
                    <td>{index + 1}</td>
                    <td>{cart.title}</td>
                    <td>{formatPrice(cart.discountedPrice)}</td>
                    <td className="d-flex align-items-center">
                      <button className="btn mx-2" onClick={() => dispatch(toggleCartQty({ id: cart.id, type: "DEC" }))}>
                        <i className="fas fa-minus "></i>
                      </button>
                      <div>
                        {cart.quantity}
                      </div>
                      <button className="btn mx-2" onClick={() => dispatch(toggleCartQty({ id: cart.id, type: "INC" }))}>
                        <i className="fas fa-plus "></i>
                      </button>
                    </td>
                    <td>
                      {formatPrice(cart.totalPrice)}
                    </td>
                    <td>
                      <button className="btn btn-danger" onClick={() => dispatch(removeFromCart(cart))}> Delete </button>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
        <div className="cart-footer py-4 d-flex justify-content-between align-items-center">
          <div className="clear-cart">
            <button onClick={() => dispatch(clearCart())} className="btn ">
              <i className="fa-solid fa-trash px-2 text-red "></i>
              <span className="text-red">Clear Cart</span>
            </button>
          </div>
          <div className="c-f-left p-4">
            <div className="c-f-txt my-2">
              <div>
                total ({itemsCount}) items : <span className="text-orange fw-bold">{formatPrice(totalAmount)}</span>
              </div>
            </div>
            <button className="btn bg-orange text-white check-btn" >Check Out</button>
          </div>
        </div>
      </Container>
    </>
  )
}

export default CartPage;