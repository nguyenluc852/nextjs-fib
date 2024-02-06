import { useDispatch } from "react-redux"
import { AnyAction } from "redux"
import { fetchEditOrder, fetchListOrder } from "../../../stores/order/effects"
import { RequestEditOrder, RequestOrder } from "../../../stores/order/model"

export type UseService = typeof useService

export const useService = () => {
  const dispatch = useDispatch()
  const getListOrder = async () =>{
    return dispatch(fetchListOrder() as unknown as AnyAction)
  }

  const editOrder = async (request: RequestEditOrder, token: string) => {
    return dispatch(fetchEditOrder(request, token) as unknown as AnyAction)
  }


  return {getListOrder, editOrder}
}
