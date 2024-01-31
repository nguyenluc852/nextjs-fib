import { createSlice } from "@reduxjs/toolkit"

import type { State, OrderInfo } from "./model"
import type { PayloadAction } from "@reduxjs/toolkit"

const initialState: State = {
  listOrder: [],
  order: null
}

const slice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setListOrderInfo: (state, action: PayloadAction<Array<OrderInfo>>) => {
      state.listOrder = action.payload
    },
    setEditOrder: (state, action: PayloadAction<OrderInfo>) => {
      state.order = action.payload
    }
  },
})

const {
  actions,
  reducer,
} = slice

export default slice

export { actions, reducer }
