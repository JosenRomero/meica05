
const ItemBox = ({ items, title = ""}) => {

  return (
    <div className="bg-white p-10 rounded-xl w-full sm:w-auto">
      {title !== "" && (
        <h2 className="mb-5 text-center">{title}</h2>
      )}
      <ul class="list-disc list-outside">
        {items.map((item, i) => {
          return <li>{item}</li>
        })}
      </ul>
    </div>
  )

}

export default ItemBox
