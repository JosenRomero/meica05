import ItemMenu from './ItemMenu'

const Menu = () => {

  return (
    <nav className="p-4">
      <div className="md:w-3/4 mx-auto flex justify-end gap-x-3">
        <ItemMenu to={"/"} text={"Inicio"} />
        <ItemMenu to={"about"} text={"Bio"} />
        <ItemMenu  to={"hashtags"} text={"Hashtags"} />
      </div>
    </nav>
  )

}

export default Menu
