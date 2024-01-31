import { useDispatch } from "react-redux"
import { AnyAction } from "redux"
import { fetchCreateOrder, fetchListOrder } from "../../../stores/order/effects"
import { RequestOrder } from "../../../stores/order/model"

export type UseService = typeof useService

export const useService = () => {
  const dispatch = useDispatch()
  const getListOrder = async () =>{
    return dispatch(fetchListOrder() as unknown as AnyAction)
  }

  const createOrder = async (request: RequestOrder) => {
    return dispatch(fetchCreateOrder(request) as unknown as AnyAction)
  }

  return {getListOrder, createOrder}
}
