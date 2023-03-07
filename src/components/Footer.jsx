import LinkTag from './LinkTag'

const Footer = () => {

  return (
    <footer className="text-white text-center text-xl p-4">
      <p>Built by <LinkTag to={"https://github.com/JosenRomero"} text={"José Romero"} /></p>
    </footer>
  )

}

export default Footer
