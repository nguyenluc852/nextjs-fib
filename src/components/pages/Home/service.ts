import { useDispatch } from "react-redux"
import { AnyAction } from "redux"

export type UseService = typeof useService

export const useService = () => {
  const dispatch = useDispatch()

  return {}
}
