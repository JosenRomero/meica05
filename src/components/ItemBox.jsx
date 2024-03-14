import TitleBox from './TitleBox'

const ItemBox = ({ items, title}) => {

  return (
    <div className="bg-white p-10 rounded-xl w-full sm:w-auto border border-green-200 shadow relative">
      <TitleBox title={title} />
      <ul className="list-disc list-outside">
        {items.map((item, i) => {
          return <li key={i}>{item}</li>
        })}
      </ul>
    </div>
  )

}

export default ItemBox
