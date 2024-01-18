import c from "clsx"
import s from "./style.module.scss"
import { ReactElement } from "react"

// bootstrap-iconが入るボータン
// bootstrap-icon以外のElementを渡すと正確に表示されない可能性がある

type Props = {
  className?: string
  name?: string // ボタンに表示する名前
  onClick: VoidFunction
  type: "primary" | "danger" | "success" | "info"
  icon: ReactElement
  iconPosition: "left" | "right" // ボータン名前に対するiconの位置を指定する
  isDisable?: boolean
}

const ButtonIcon: React.FC<Props> = props => {
  const {
    className,
    name,
    onClick,
    type,
    icon,
    iconPosition,
    isDisable
  } = props

  let buttonType = ""
  switch (type) {
    case "primary" : {
      buttonType = "btn-primary"
      break
    }
    case "danger" : {
      buttonType = "btn-danger"
      break
    }
    case "success" : {
      buttonType = "btn-success"
      break
    }
    case "info" : {
      buttonType = "btn-info"
      break
    }
  }

  if (iconPosition == "left") {
    return <button className={c(s.root, className, `btn ${buttonType}`)} type="button" disabled={isDisable} onClick={() => onClick()}><>{icon}{` ${name}`}</></button>
  }
  return <button className={c(s.root, className, `btn ${buttonType}`)} type="button" disabled={isDisable} onClick={() => onClick()}><>{name}{icon}</></button>
}

export default ButtonIcon
