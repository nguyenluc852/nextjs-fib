import { createSlice } from "@reduxjs/toolkit"

import type { State, UserInfo } from "./model"
import type { PayloadAction } from "@reduxjs/toolkit"

const initialState: State = {
  userInfo: null, 
  nav: false
}

const slice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserInfo>) => {
      state.userInfo = action.payload
    },
    removeUser: (state) => {
      state.userInfo = null
    },
    setNav: (state, action: PayloadAction<boolean>) => {
      state.nav = action.payload
    },
  },
})

const {
  actions,
  reducer,
} = slice

export default slice

export { actions, reducer }
