import c from "clsx"

import s from "./style.module.scss"

type Props = {
  className?: string
}

const Index: React.FC<Props> = props => {
  const { className } = props

  return (
    <p>&copy; 2024 Token Financial Broker. All rights reserved.</p>
  )
}

export default Index
