import c from "clsx"

// バリデーション時の入力のエラーメッセージを表示するコンポーネント

type Props = {
  className?: string
  message: string
}

const MessageInvalid: React.FC<Props> = props => {
  const {className,
    message} = props
  return (
    <div className={c("invalid-feedback", className)}>{message}</div>
  )
}

export default MessageInvalid
