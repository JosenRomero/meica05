import { useSpriteAnimation } from '../hooks/useSpriteAnimation'
import SocialMedia from './SocialMedia'

const PlantContainer = () => {

  const { viewer, scene } = useSpriteAnimation();

  return (
    <section ref={scene} className="!h-full !w-10/12 !mx-auto flex flex-col gap-5 items-center">
      <div ref={viewer} className="viewer"></div>
      <SocialMedia />
    </section>
  )

}

export default PlantContainer
