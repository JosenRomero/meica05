import { useSpriteAnimation } from '../hooks/useSpriteAnimation'

const PlantContainer = () => {

  const { viewer, scene } = useSpriteAnimation();

  return (
    <section ref={scene} className='!h-full !w-full'>
      <div ref={viewer} className='viewer'></div>
    </section>
  )

}

export default PlantContainer
