import c from "clsx"
import s from "./style.module.scss"

// Buttonコンポーネントと同じだがoutlineのタイプである

type Props = {
  className?: string
  name: string // ボタンに表示する名前
  onClick: VoidFunction
  type: "primary" | "danger" | "success"
  isDisable?: boolean
}

const ButtonOutline: React.FC<Props> = props => {
  const {
    className,
    name,
    onClick,
    type,
    isDisable
  } = props

  let buttonType = ""
  switch (type){
    case "primary" : {
      buttonType = "border-blue-600 text-blue-600"
      break
    }
    case "danger" : {
      buttonType = "border-red-600 text-red-600"
      break
    }
    case "success" : {
      buttonType = "border-green-500 text-green-500"
      break
    }
  }

  return <button className={c(s.root, className, `${buttonType}`, "inline-block px-6 py-2 border-2  font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out")} type="button" disabled={isDisable} onClick={onClick}>{name}</button>

}

export default ButtonOutline
