import c from "clsx"
import s from "./style.module.scss"


type Props = {
  className?: string
  name: string // ボタンに表示する名前
  onClick?: VoidFunction
  type: "primary" | "danger" | "success" | "secondary"
  isDisable?: boolean
}

const ButtonModal: React.FC<Props> = props => {
  const {
    className,
    name,
    onClick,
    type,
    isDisable,
  } = props

  let buttonType = ""
  switch (type){
    case "primary" : {
      buttonType = "btn-primary"
      break
    }
    case "danger" : {
      buttonType = "btn-danger"
      break
    }
    case "secondary" : {
      buttonType = "btn-secondary"
      break
    }
    case "success" : {
      buttonType = "btn-success"
      break
    }
  }

  return <button className={c(s.root, className, `btn ${buttonType}`)} 
    type="button" 
    data-bs-dismiss="modal" 
    disabled={isDisable} 
    onClick={onClick}>
    {name}
  </button>

}

export default ButtonModal
