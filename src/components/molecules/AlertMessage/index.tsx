import c from "clsx"
import Label from "../../atom/Label"

// バリデーション時のフォームのエラーメッセージを表示するコンポーネント

type Props = {
  className?: string
  message: string
  type: "primary" | "danger" | "success"
  onClose?: VoidFunction
}

const AlertMessage: React.FC<Props> = props => {
  const { className,
    message,
    type,
    onClose } = props

  let alertType = ""
  switch (type){
    case "primary" : {
      alertType = "alert-primary"
      break
    }
    case "danger" : {
      alertType = "alert-danger"
      break
    }
    case "success" : {
      alertType = "alert-success"
      break
    }
  }

  return (
    <div className={c(className)}>
      <div 
        className={c(
          "alert-dismissible fade show", `alert ${alertType}`,
        )} 
        role="alert">
        <Label text={message}/>
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={onClose}/>
      </div>
    </div>

  )
}

export default AlertMessage
