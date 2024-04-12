import {actions} from "./slice"
import {AsyncAction} from "../index";
import {dayjs, formatDateTime} from "../../utils/date";
import { StakeInfo, RequestStake } from "./model";
import { createStake, getStake } from "../../datasources/stake";

export const fetchStake = (token: String, wallet: string): AsyncAction => async dispatch => {
  const response = await getStake(token, wallet)
  console.log("res", response)
  
  dispatch(actions.setStake(response))

  return response
}

export const fetchCreateStake = (param: RequestStake, token: String): AsyncAction => async () => {
  console.log("create",param)

  const response = await createStake(param, token)
  console.log("res", response)
  return response
}