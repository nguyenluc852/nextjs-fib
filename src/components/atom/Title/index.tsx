import c from "clsx"
import s from "./style.module.scss"

// 入力ブロックのタイトル

type Props = {
  className?: string
  title: string
}

const Title: React.FC<Props> = props => {
  const { className,
    title } = props

  return (
    <div className={c(s.root, className)}>
      <div className="col-sm-10">
        <h4>{title}</h4>
      </div>
    </div>

  )
}

export default Title
