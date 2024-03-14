import { Fade } from 'react-awesome-reveal'
import { infoBasic, likes, dislikes } from '../data.js'
import ItemBox from '../components/ItemBox'

const AboutPage = () => {

  return (
    <div className="w-4/5 h-full text-zinc-500 mx-auto mt-20 leading-relaxed">
      <Fade delay={100}>
        <div className="mb-5 flex gap-9 justify-center flex-wrap">
          <ItemBox items={infoBasic} />
          <div className="flex gap-9 justify-center flex-wrap">
            <ItemBox items={likes} title="Gustos" />
            <ItemBox items={dislikes} title="Disgustos" />
          </div>
        </div>
      </Fade>
    </div>
  )

}

export default AboutPage
