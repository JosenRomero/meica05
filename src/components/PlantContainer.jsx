import { Zoom } from 'react-awesome-reveal'
import meica_img from '../assets/meica_img.jpg'
import { Typewriter } from 'react-simple-typewriter'
import SocialMedia from './SocialMedia'

const PlantContainer = () => {

  return (
    <section className="!w-10/12 !mx-auto flex flex-col gap-9 items-center">
      <Zoom>
        <img className="rounded-full border-white border-2 w-48 h-48" src={meica_img} alt={"meica"} />
      </Zoom>
      <p className="text-black text-center text-3xl font-bold h-[40px]">
        <Typewriter words={["Meica05", "vtuber", "plantita"]} loop={false} cursor={true} />
      </p>
      <SocialMedia />
    </section>
  )

}

export default PlantContainer
