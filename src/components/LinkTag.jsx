
const LinkTag = ({to, text, className = ""}) => {

  return (
    <a className={`text-white font-semibold hover:text-white hover:underline ${className}`} href={to} target="_blank">{text}</a>
  )

}

export default LinkTag
