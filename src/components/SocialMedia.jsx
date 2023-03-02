
import { FaYoutube, FaTwitch, FaTiktok, FaTwitter, FaInstagram } from 'react-icons/fa'

const SocialMedia = () => {

  return (
    <div className="flex gap-5 items-center [&>a]:bg-white [&>a]:p-2.5 [&>a]:rounded-full">
      <a className="hover:opacity-75" href="https://www.youtube.com/@meica05" target="_blank"><FaYoutube size={32} color={"#65a30d"} /></a>
      <a className="hover:opacity-75" href="https://www.twitch.tv/meica05" target="_blank"><FaTwitch size={32} color={"#65a30d"} /></a>
      <a className="hover:opacity-75" href="https://www.tiktok.com/@meica05offcial" target="_blank"><FaTiktok size={32} color={"#65a30d"} /></a>
      <a className="hover:opacity-75" href="https://twitter.com/meica05" target="_blank"><FaTwitter size={32} color={"#65a30d"} /></a>
      <a className="hover:opacity-75" href="https://www.instagram.com/meica05/" target="_blank"><FaInstagram size={32} color={"#65a30d"} /></a>
    </div>
  )

}

export default SocialMedia
