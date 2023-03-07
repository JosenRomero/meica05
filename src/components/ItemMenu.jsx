import { Link } from 'react-router-dom'

const ItemMenu = ({ to, text, className = ""}) => {

  return (
    <Link className={`text-lime-700 bg-white px-4 py-2 rounded-xl hover:opacity-75 hover:text-lime-700 ${className}`} to={to}>{text}</Link>
  )

}

export default ItemMenu
