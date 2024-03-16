import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { STATUS } from "../utils/status";


export const fetchAsyncSearch = createAsyncThunk("searchProducts/fetch", async (searchTerm) => {
  const res = await fetch(`https://dummyjson.com/products/search?q=${searchTerm}`)
  const data = await res.json()
  console.log(data.products);
  return data.products
})

const initialState = {
  searchProducts: [],
  searchStatus: STATUS.IDLE
}


const searchSlice = createSlice({
  name: "search", initialState,
  reducers: {
    clearSearch: (state, action) => {
      state.searchProducts = []
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAsyncSearch.pending, (state, action) => {
      state.searchStatus = STATUS.LOADING
    })
    builder.addCase(fetchAsyncSearch.fulfilled, (state, action) => {
      state.searchStatus = STATUS.SUCCEEDED
      state.searchProducts = action.payload
    })
    builder.addCase(fetchAsyncSearch.rejected, (state, action) => {
      state.searchStatus = STATUS.FAILD
    })
  }
})

export const getSearchProducts = (state) => state.search.searchProducts
export const getSearchProductsStatus = (state) => state.search.searchStatus
export const { setSearchTerm,clearSearch } = searchSlice.actions

export default searchSlice.reducer






