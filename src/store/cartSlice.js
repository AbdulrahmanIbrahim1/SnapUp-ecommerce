import { createSlice } from "@reduxjs/toolkit";


const fetchFromLocalStorage = () => {
  let cart = localStorage.getItem('cart')
  if (cart) {
    return JSON.parse(cart)
  }
  else {
    return []
  }
}
const storeInlocalStorage = (data) => {
  localStorage.setItem('cart', JSON.stringify(data))
}

const initialState = {
  carts: fetchFromLocalStorage(),
  itemCount: 0,
  totalAmount: 0,
  isCartMessageOn: false
}

const cartSilce = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const isItemInCart = state.carts.find((item) => item.id === action.payload.id)
      if (isItemInCart) {
        const tempCart = state.carts.map((item) => {
          if (item.id === action.payload.id) {
            let tempQty = item.quantity + action.payload.quantity
            let tempTotalPrice = tempQty * item.price;
            return {
              ...item,
              quantity: tempQty,
              totalPrice: tempTotalPrice
            }
          } else {
            return item;
          }
        })
        state.carts = tempCart
        storeInlocalStorage(state.carts)
      } else {
        state.carts.push(action.payload)
        storeInlocalStorage(state.carts)
      }
    },
    setCartMessageOn: (state) => {
      state.isCartMessageOn = true;
    },
    setCartMessageOff: (state) => {
      state.isCartMessageOn = false;
    },
    removeFromCart: (state, action) => {
      const tempCart = state.carts.filter((item) => item.id !== action.payload.id)
      state.carts = tempCart
      storeInlocalStorage(state.carts)
    },

    clearCart: (state) => {
      state.carts = []
      storeInlocalStorage(state.carts)
    },
    getCartTotal: (state) => {
      state.totalAmount = state.carts.reduce((cartTotal, cartItem) => {
        return cartTotal += cartItem.totalPrice
      }, 0);
      state.itemCount = state.carts.length;
    }, toggleCartQty: (state, action) => {
      const tempCart = state.carts.map((item) => {
        if (item.id === action.payload.id) {
          let tempQty = item.quantity
          let tempTotalPrice = item.totalPrice

          if (action.payload.type === "INC") {
            tempQty++;
            if (tempQty === item.stock) tempQty = item.stock
            tempTotalPrice = tempQty * item.discountPercentage
          }
          if (action.payload.type === "DEC") {
            tempQty--;
            if (tempQty < 1) tempQty = 1;
            tempTotalPrice = tempQty * item.discountPercentage
          }
          return { ...item, quantity: tempQty, totalPrice: tempTotalPrice }
        } else {
          return item
        }
      });
      state.carts = tempCart
      storeInlocalStorage(state.carts)
    }
  }
})

export const getCartMessageStatus = (state) => state.cart.isCartMessageOn
export const getAllCarts = (state) => state.cart.carts
export const getCartItemCount = (state) => state.cart.itemCount
export const { addToCart, setCartMessageOff, setCartMessageOn, toggleCartQty, removeFromCart, getCartTotal, clearCart } = cartSilce.actions
export default cartSilce.reducer