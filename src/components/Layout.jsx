import Menu from './Menu'
import Footer from './Footer'

const Layout = ({children}) => {
  
  return (
    <div className="min-h-screen grid grid-cols-1 place-content-between">
      <Menu />
      {children}
      <Footer />
    </div>
  )

}

export default Layout
