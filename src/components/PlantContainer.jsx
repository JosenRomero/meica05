import meica_img from '../assets/meica_img.jpg'
import SocialMedia from './SocialMedia'

const PlantContainer = () => {

  return (
    <section className="!w-10/12 !mx-auto flex flex-col gap-9 items-center">
      <img className="rounded-full border-white border-2 w-48 h-48" src={meica_img} alt={"meica"} />
      <SocialMedia />
    </section>
  )

}

export default PlantContainer
