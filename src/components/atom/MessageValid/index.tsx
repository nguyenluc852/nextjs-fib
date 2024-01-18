import c from "clsx"

// バリデーション時の成功なメッセージを表示するコンポーネント

type Props = {
  className?: string
  message: string
}

const MessageValid: React.FC<Props> = props => {
  const {className,
    message} = props

  return (
    <div className={c("valid-feedback", className)}>{message}</div>
  )
}

export default MessageValid
