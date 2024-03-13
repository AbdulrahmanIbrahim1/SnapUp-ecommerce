import './Cartmessage.css'
import { correct } from '../../utils/images'

function Cartmessage() {
  return (
    <>
      <div className="cart-msg d-flex justify-content-center align-items-center">
        <div className="msg-icon">
          <img src={correct} className='img-fluid' alt="" />
        </div>
        <h6 className="text-white">An item has been added to your shopping cart</h6>
      </div>
    </>
  )
}

export default Cartmessage