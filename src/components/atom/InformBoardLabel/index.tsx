import c from "clsx"
import s from "./style.module.scss"

import { useService } from "./service"

type Props = {
  className?: string
  type: "info" | "warn"
}

const InformBoardLabel: React.FC<Props> = props => {
  const { className,
    type } = props

  useService()

  let labelType = null;
  switch (type) {
    case "info": {
      labelType = "btn-info"
      break
    }
    case "warn": {
      labelType = "btn-warning"
      break
    }
  }

  return (
    <button type="button" className={c(s.root, className, `btn btn-sm ${labelType} rounded-pill`)}>お知らせ</button>
  )
}

export default InformBoardLabel
