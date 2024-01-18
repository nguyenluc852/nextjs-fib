import {actions} from "./slice"
import {AsyncAction} from "../index";
import {dayjs, formatDateTime} from "../../utils/date";
import { ConstractInfo, RequestConstract, RequestCreateConstract, RequestEditConstract } from "./model";
import { getListConstract, createConstract, updateConstract } from "../../datasources/constract";

export const fetchConstract = (param: RequestConstract): AsyncAction => async dispatch => {
  const response = await getListConstract(param)
  console.log("res", response)
  
  dispatch(actions.setConstractnfo(response))

  return response
}

export const fetchData = (param: ConstractInfo): AsyncAction => async dispatch => {
  
  dispatch(actions.setEditConstract(param))
}

export const fetchEditConstract = (param: RequestEditConstract): AsyncAction => async () => {
  const response = await updateConstract(param)
  console.log("res", response)
  return response
}

export const fetchCreateConstract = (param: RequestCreateConstract): AsyncAction => async () => {
  console.log("create",param)

  const response = await createConstract(param)
  console.log("res", response)
  return response
}