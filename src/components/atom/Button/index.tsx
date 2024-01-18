import c from "clsx"
import s from "./style.module.scss"

type Props = {
  className?: string
  name: string 
  onClick: VoidFunction
  type: "primary" | "danger" | "success" | "back"
  isDisable?: boolean
  isLoading?: boolean
}

const Button: React.FC<Props> = props => {
  const {
    className,
    name,
    onClick,
    type,
    isDisable,
    isLoading
  } = props

  let buttonType = ""
  switch (type){
    case "primary" : {
      buttonType = "inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
      break
    }
    case "danger" : {
      buttonType = "inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
      break
    }
    case "success" : {
      buttonType = "inline-block px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out"
      break
    }
    case "back" :{
      buttonType ="inline-block px-6 py-2.5 bg-yellow-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-700 active:shadow-lg transition duration-150 ease-in-out"
    }
    
  }

  return <button className={c(s.root, className, `${buttonType}`)} 
    type="button" disabled={isDisable} onClick={onClick}>
    {name}
    { isLoading && <div
      className="inline-block ml-2 h-4 w-4 animate-spin rounded-full 
        border-2 border-solid border-current border-r-transparent 
        align-[-0.125em] text-primary motion-reduce:animate-[spin_1.5s_linear_infinite]"
      role="status">
      </div>
    }
    
  </button>

}

export default Button
