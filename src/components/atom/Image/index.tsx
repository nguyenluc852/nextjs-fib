type Props = {
  className?: string
  path: string
  alt?: string
  width: number
  height: number
  onClick?: VoidFunction
}

const Image: React.FC<Props> = props => {
  const {
    className,
    path,
    alt = "",
    width,
    height,
    onClick,
  } = props

  return <img
    className={className}
    height={height}
    alt={alt}
    src={path}
    width={width}
    onClick={() => !!onClick && onClick()}
  />
}

export default Image
