import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { STATUS } from "../utils/status";

const initialState = {
  categories: [],
  categoriesStatus: STATUS.IDLE,
  categoryProduct: [],
  categoryProductStatus: STATUS.IDLE
}
export const fetchAsyncCategories = createAsyncThunk('categories/fetch', async () => {
  const res = await fetch('https://dummyjson.com/products/categories');
  const data = await res.json()
  // console.log(data);
  return data;
})
export const fetchProductOfCateory = createAsyncThunk('productsOfCategory/fetch', async (cat) => {
  const res = await fetch(`https://dummyjson.com/products/category/${cat}`);
  const data = await res.json()
  console.log("product cat is : ",data);
  return data;
})


const CategorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAsyncCategories.pending, (state, action) => {
      state.categoriesStatus = STATUS.LOADING
    })
    builder.addCase(fetchAsyncCategories.fulfilled, (state, action) => {
      state.categories = action.payload
      state.categoriesStatus = STATUS.SUCCEEDED
    })
    builder.addCase(fetchAsyncCategories.rejected, (state, action) => {
      state.categoriesStatus = STATUS.FAILD
    })
    builder.addCase(fetchProductOfCateory.fulfilled,(state ,action)=>{
      state.categoryProduct=action.payload
      state.categoryProductStatus=STATUS.SUCCEEDED
    })
    
  }

})

export const getAllCategories = (state) => state.category.categories
export const grtAllProductCat = (state) => state.category.categoryProduct

export default CategorySlice.reducer;

