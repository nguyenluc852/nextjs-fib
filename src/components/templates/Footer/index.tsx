import c from "clsx"

import s from "./style.module.scss"

type Props = {
  className?: string
}

const Index: React.FC<Props> = props => {
  const { className } = props

  return (
    <footer className={c(s.footer, className)}>Copyright © AI CROSS Inc. All rights reserved</footer>
  )
}

export default Index
