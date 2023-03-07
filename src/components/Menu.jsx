import ItemMenu from './ItemMenu'

const Menu = () => {

  return (
    <nav className="p-2">
      <div className="md:w-3/4 mx-auto flex items-center md:justify-between gap-x-3">
        <ItemMenu to={"/"} text={"meica05"} className={"font-semibold text-2xl"} /> 
        <div className="flex gap-x-3">
          <ItemMenu to={"/"} text={"Inicio"} />
          <ItemMenu to={"about"} text={"Bio"} />
          <ItemMenu  to={"hashtags"} text={"Hashtags"} />
        </div>
      </div>
    </nav>
  )

}

export default Menu
