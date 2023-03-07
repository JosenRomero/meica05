import LinkTag from '../components/LinkTag'

const HashtagsPage = () => {

  return (
    <div className="w-3/4 h-full text-zinc-500 mx-auto mt-20 leading-relaxed">
      <div className="mb-5 flex gap-9 justify-center flex-wrap">
        <div className="bg-white p-5 rounded-xl">
          <h2 className="mb-5 text-center">Hashtags</h2>
          <p>General: <LinkTag to={"https://twitter.com/hashtag/Meica?src=hashtag_click"} text={"#Meica"} bgWhite={false} /></p>
          <p>Live: <LinkTag to={"https://twitter.com/hashtag/MeicaLive?src=hashtag_click"} text={"#MeicaLive"} bgWhite={false} /></p>
          <p>FanArt: <LinkTag to={"https://twitter.com/hashtag/Meica_art?src=hashtag_click"} text={"#Meica_art"} bgWhite={false} /></p>
          <p>NSFW: <LinkTag to={"https://twitter.com/hashtag/MeiCaliente?src=hashtag_click"} text={"#MeiCaliente"} bgWhite={false} /></p>
          <p>Memes: <LinkTag to={"https://twitter.com/hashtag/memeica?src=hashtag_click"} text={"#memeica"} bgWhite={false} /></p>
          <p>Recomendación de música: <LinkTag to={"https://twitter.com/hashtag/MeicaMusic?src=hashtag_click"} text={"#MeicaMusic"} bgWhite={false} /></p>
        </div>
      </div>
    </div>
  )

}

export default HashtagsPage
