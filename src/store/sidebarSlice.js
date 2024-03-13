import { createSlice } from "@reduxjs/toolkit";



const initialState = {
  isSidebaron: false
}
const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    setSidebarOn: (state) => {
      state.isSidebaron = true;
    },
    setSidebarOff: (state) => {
      state.isSidebaron = false;
    },
  }
})

export const getSidebarStatus = (state) => state.sidebar.isSidebaron;
export const { setSidebarOff, setSidebarOn } = sidebarSlice.actions;

export default sidebarSlice.reducer;