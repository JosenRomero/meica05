
const LinkTag = ({to, text}) => {

  return (
    <a className={"text-zinc-500 font-semibold hover:text-zinc-500 hover:underline"} href={to} target="_blank">{text}</a>
  )

}

export default LinkTag
