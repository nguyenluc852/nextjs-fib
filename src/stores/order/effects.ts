import {actions} from "./slice"
import {AsyncAction} from "../index";
import {dayjs, formatDateTime} from "../../utils/date";
import { OrderInfo, RequestOrder, RequestEditOrder } from "./model";
import { getListOrder, createOrder,  updateOrder} from "../../datasources/order";

export const fetchListOrder = (): AsyncAction => async dispatch => {
  const response = await getListOrder()
  console.log("res", response)
  
  dispatch(actions.setListOrderInfo(response))

  return response
}

export const fetchEditOrder = (param: RequestEditOrder, token: string): AsyncAction => async () => {
  const response = await updateOrder(param, token)
  console.log("res", response)
  return response
}

export const fetchCreateOrder = (param: RequestOrder): AsyncAction => async () => {
  console.log("create",param)

  const response = await createOrder(param)
  console.log("res", response)
  return response
}