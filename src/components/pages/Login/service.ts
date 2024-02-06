import { useDispatch } from "react-redux"
import { AnyAction } from "redux"
import { fetchCreateOrder, fetchListOrder, fetchSetToken } from "../../../stores/order/effects"
import { RequestOrder } from "../../../stores/order/model"

export type UseService = typeof useService

export const useService = () => {
  const dispatch = useDispatch()
  const setToken = async (token: string) =>{
    return dispatch(fetchSetToken(token) as unknown as AnyAction)
  }

  return {setToken}
}
