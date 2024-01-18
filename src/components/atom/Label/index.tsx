import c from "clsx"
import s from "./style.module.scss"

type Props = {
  className?: string
  text: string
  badge?: string
  badgeStyle?: string
}

const Label: React.FC<Props> = props => {
  const { className,
    text,
    badge,
    badgeStyle } = props

  return (
    <label className={c(s.root, className)}>{text}<span className={`badge ${badgeStyle}`}>{badge}</span></label>
  )
}

export default Label
