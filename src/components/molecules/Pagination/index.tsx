import c from "clsx"
import s from "./style.module.scss"

type Props = {
  className?: string
  explain?: string
}

const Pagination: React.FC<Props> = props => {
  const { className,
    explain } = props

  // TODO
  return (
    <div className={c(s.root, className)}>
      <nav aria-label="...">
        <ul className="pagination">
          <li className="page-item disabled">
            <a className="page-link" href="#">Previous</a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">Next</a>
          </li>
        </ul>
        <div className="form-text">{explain}</div>
      </nav>
    </div>

  )
}

export default Pagination
