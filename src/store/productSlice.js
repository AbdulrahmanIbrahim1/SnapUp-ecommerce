import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../utils/status";

// for get products list with limit data
export const fetchProducts = createAsyncThunk("products/fetch", async (limit) => {
  const res = await fetch(`https://dummyjson.com/products?limit=${limit}`);
  const data = await res.json()
  console.log("data is : ", data.products);
  return data.products;
})
// get single product
export const fetchProductSingle = createAsyncThunk("productSingle/fetch", async (id) => {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  const data = await res.json()
  // console.log("data is : ", data);
  return data;
})

const initialState = {
  products: [],
  productsStatus: STATUS.IDLE,
  productSingle: [],
  productSingleStatus: STATUS.IDLE
}

const productsSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state, action) => {
      state.productsStatus = STATUS.LOADING;
    })
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.productsStatus = STATUS.FAILD;
    })
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.productsStatus = STATUS.SUCCEEDED;
      state.products = action.payload
    })
    // 
    builder.addCase(fetchProductSingle.fulfilled, (state, action) => {
      state.productSingleStatus = STATUS.SUCCEEDED;
      state.productSingle = action.payload
    })
    builder.addCase(fetchProductSingle.pending, (state, action) => {
      state.productSingleStatus = STATUS.LOADING;
    })
    builder.addCase(fetchProductSingle.rejected, (state, action) => {
      state.productSingleStatus = STATUS.FAILD;
    })

  }
})

export const getAllProducts = (state) => state.product.products;
export const getAllProductsStats = (state) => state.product.productsStatus
export const getSingleProducts = (state) => state.product.productSingle
export const getSingleProductsStatus = (state) => state.product.productSingleStatus
export { }


export default productsSlice.reducer;


