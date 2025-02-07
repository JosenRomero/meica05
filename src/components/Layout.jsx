import Menu from './Menu'
import Footer from './Footer'

const Layout = ({children}) => {
  
  return (
    <div className="min-h-screen grid grid-cols-1 place-content-between font-serif">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      <Menu />
      {children}
      <Footer />
    </div>
  )

}

export default Layout
