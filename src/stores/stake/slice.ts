import { createSlice } from "@reduxjs/toolkit"

import type { State, StakeInfo } from "./model"
import type { PayloadAction } from "@reduxjs/toolkit"

const initialState: State = {
  stake: null,
}

const slice = createSlice({
  name: "stake",
  initialState,
  reducers: {
    setStake: (state, action: PayloadAction<StakeInfo>) => {
      state.stake = action.payload
    },
  },
})

const {
  actions,
  reducer,
} = slice

export default slice

export { actions, reducer }
