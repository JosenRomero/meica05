import { NavLink } from "react-router-dom"

const ItemMenu = ({ to, text }) => {
  return (
    <NavLink 
      className={({ isActive }) => 
        [
          isActive ? "bg-stone-500 text-stone-100" : "bg-white text-slate-800",
          "font-medium text-sm px-5 py-2.5 rounded-xl hover:bg-stone-500 hover:text-stone-100"
        ].join(" ")
      } 
      to={to}
    >
      {text}
    </NavLink>
  )
}

export default ItemMenu
