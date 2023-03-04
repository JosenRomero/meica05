
const AboutPage = () => {

  return (
    <div className="w-3/4 h-full text-zinc-500 mx-auto mt-20 leading-relaxed">
      <div className="mb-5 flex gap-9 justify-center flex-wrap">
        <div className="bg-white p-5 rounded-xl">
          <p>Una plantita que nacio en tu jardin</p>
          <p>Edad: 18</p>
          <p>Cumpleaños: 7 de Mayo</p>
          <p>Altura: 160 cm.</p>
          <p>Idiomas: Japonés, Español, Meicañol</p>
        </div>
        <div className="flex gap-9">
          <div className="bg-white p-5 rounded-xl">
            <h2 className="mb-5 text-center">Gustos</h2>
            <p>Cereal</p>
            <p>Onigiri</p>
            <p>Misoshiru (sopa)</p>
            <p>Cantar</p>
            <p>Videojuegos</p>
            <p>Charlar</p>
            <p>TikTok</p>
            <p>Aesthetic Warning</p>
          </div>
          <div className="bg-white p-5 rounded-xl">
            <h2 className="mb-5 text-center">Disgustos</h2>
            <p>Preposiciones</p>
            <p>Conjugación de verbo</p>
            <p>Kanjis</p>
            <p>Matemáticas</p>
            <p>Leer texto</p>
            <p>Unicornios</p>
            <p>Caballeros blancos</p>
          </div>
        </div>
      </div>
    </div>
  )

}

export default AboutPage
