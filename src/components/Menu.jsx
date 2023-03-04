import { Link } from 'react-router-dom';

const Menu = () => {

  return (
    <nav className="p-2">
      <div className="md:w-3/4 mx-auto flex items-center md:justify-between gap-x-3">
        <Link className="text-lime-700 bg-white px-4 py-2 rounded-xl font-semibold text-2xl hover:opacity-75 hover:text-lime-700" to={"/"}>meica05</Link>
        <div className="flex gap-x-3">
          <Link className="text-lime-700 bg-white px-4 py-2 rounded-xl hover:opacity-75 hover:text-lime-700" to={"/"}>Home</Link>
          <Link className="text-lime-700 bg-white px-4 py-2 rounded-xl hover:opacity-75 hover:text-lime-700" to={"about"}>About</Link>
        </div>
      </div>
    </nav>
  )

}

export default Menu
