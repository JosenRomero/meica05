
import { FaYoutube, FaTwitch, FaTiktok, FaTwitter, FaInstagram } from 'react-icons/fa'

const SocialMedia = () => {

  return (
    <div className="flex gap-9 items-center">
      <a className="inline-block hover:scale-125 hover:opacity-75 transition" href="https://www.youtube.com/@meica05" target="_blank"><FaYoutube size={32} color={"#65a30d"} /></a>
      <a className="inline-block hover:scale-125 hover:opacity-75 transition" href="https://www.twitch.tv/meica05" target="_blank"><FaTwitch size={32} color={"#65a30d"} /></a>
      <a className="inline-block hover:scale-125 hover:opacity-75 transition" href="https://www.tiktok.com/@meica05offcial" target="_blank"><FaTiktok size={32} color={"#65a30d"} /></a>
      <a className="inline-block hover:scale-125 hover:opacity-75 transition" href="https://twitter.com/meica05" target="_blank"><FaTwitter size={32} color={"#65a30d"} /></a>
      <a className="inline-block hover:scale-125 hover:opacity-75 transition" href="https://www.instagram.com/meica05/" target="_blank"><FaInstagram size={32} color={"#65a30d"} /></a>
    </div>
  )

}

export default SocialMedia
