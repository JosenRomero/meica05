
const LinkTag = ({to, text, className = "", bgWhite = true}) => {

  return (
    <a className={`${bgWhite ? 'text-white' : 'text-zinc-500'} font-semibold ${bgWhite ? 'hover:text-white' : 'hover:text-zinc-500'} hover:underline ${className}`} href={to} target="_blank">{text}</a>
  )

}

export default LinkTag
