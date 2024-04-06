import { createSlice } from "@reduxjs/toolkit"

import type { State, ConstractInfo } from "./model"
import type { PayloadAction } from "@reduxjs/toolkit"

const initialState: State = {
  listConstract: [],
  constract: null
}

const slice = createSlice({
  name: "constract",
  initialState,
  reducers: {
    setConstractnfo: (state, action: PayloadAction<Array<ConstractInfo>>) => {
      state.listConstract = action.payload
    },
    setEditConstract: (state, action: PayloadAction<ConstractInfo>) => {
      state.constract = action.payload
    }
  },
})

const {
  actions,
  reducer,
} = slice

export default slice

export { actions, reducer }
