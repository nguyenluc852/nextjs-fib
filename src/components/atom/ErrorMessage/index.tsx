import c from "clsx"
import s from "./style.module.scss"

// バリデーション時のフォームのエラーメッセージを表示するコンポーネント

type Props = {
  className?: string
  message: string
}

const ErrorMessage: React.FC<Props> = props => {
  const { className,
    message } = props

  return (
    <div className={c(s.root, className)}>
      <div className="alert alert-danger" role="alert">
        {message}
      </div>
    </div>

  )
}

export default ErrorMessage
