import { AnyAction, combineReducers, configureStore } from "@reduxjs/toolkit"

import me from "./user"
import order from "./order"
import stake from "./stake"
import type { Action, ThunkAction } from "@reduxjs/toolkit"
import type { ThunkDispatch } from "redux-thunk"
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from "redux-persist"
import storage from "redux-persist/lib/storage"

const reducer = combineReducers({
  user: me.reducer,
  order:  order.reducer,
  stake: stake.reducer
})

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["appSetting"]
}

const persistedReducer = persistReducer(persistConfig, reducer)

export const initializeStore = (preloadedState = undefined) => {
  return configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware => [ ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }) ],
    preloadedState,
    devTools: true // TODO環境変数で切り替えるようにする  PUBLIC_APP_ENV !== 'prod'
  })
}

export type RootState = ReturnType<typeof reducer>

export type AsyncAction<R = void> = ThunkAction<Promise<R>, RootState, undefined, Action<string>>

export type Dispatch = ThunkDispatch<RootState, any, Action> // FIXME ここの型解決の方法がよくわからない。調べる。
