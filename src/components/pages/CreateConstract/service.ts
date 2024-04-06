import { useDispatch } from "react-redux"
import { AnyAction } from "redux"
import { fetchCreateConstract } from "../../../stores/constract/effects"
import { RequestCreateConstract } from "../../../stores/constract/model"
import { fetchCreatePreorder } from "../../../stores/preorder/effects"
import { fetchRoom } from "../../../stores/room/effects"
import { RoomRequest } from "../../../stores/room/model"

export type UseService = typeof useService

export const useService = () => {
  const dispatch = useDispatch()
  const getRoomInfo = async (param: RoomRequest) =>{
    return dispatch(fetchRoom(param) as unknown as AnyAction)
  }
  const getListRoom = async (param: RoomRequest) =>{
    return dispatch(fetchRoom(param) as unknown as AnyAction)
  }

  const createConstract = async (param: RequestCreateConstract) =>{
    return dispatch(fetchCreateConstract(param) as unknown as AnyAction)
  }

  return {getRoomInfo, getListRoom, createConstract}
}
