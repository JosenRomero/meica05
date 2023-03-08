import LinkTag from './LinkTag'

const Footer = () => {

  return (
    <footer className="text-white text-center text-base p-4">
      <p>Built by <LinkTag to={"https://github.com/JosenRomero"} text={"José Romero"} />, background by <LinkTag to={"https://www.svgbackgrounds.com/"} text={"SVGBackgrounds.com"} /> </p>
    </footer>
  )

}

export default Footer
