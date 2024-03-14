import { NavLink } from "react-router-dom"

const ItemMenu = ({ to, text }) => {
  return (
    <NavLink 
      className={({ isActive }) => 
        [
          isActive ? "bg-green-600 text-green-100" : "bg-white text-slate-800",
          "font-medium text-sm px-5 py-2.5 rounded-xl hover:bg-green-600 hover:text-green-100 border"
        ].join(" ")
      } 
      to={to}
    >
      {text}
    </NavLink>
  )
}

export default ItemMenu
