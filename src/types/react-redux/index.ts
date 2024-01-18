import "redux"
import type { RootState } from "../../stores"

declare module "react-redux" {
  // eslint-disable-next-line
    interface DefaultRootState extends RootState {}
}
