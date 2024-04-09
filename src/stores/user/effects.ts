import {actions} from "./slice"
import {AsyncAction} from "../index";
import {dayjs, formatDateTime} from "../../utils/date";
import { UserInfo } from "./model";


export const fetchSetUser = (user: UserInfo): AsyncAction => async dispatch => {
  
  dispatch(actions.setUser(user))
}

export const fetchRemoveUser = (): AsyncAction => async dispatch => {
  
  dispatch(actions.removeUser())
}
export const fetchSetNav = (nav: boolean): AsyncAction => async dispatch => {
  
  dispatch(actions.setNav(nav))
}