import useModal from '../hooks/useModal'
import Modal from './Modal'
import LinkTag from './LinkTag'

const Credits = () => {

  const { isOpenModal, openModal, closeModal } = useModal();

  return (
    <>
      <button className="text-white text-base hover:underline" onClick={openModal}>Credits</button>
      <Modal
        isOpen={isOpenModal} 
        closeModal={closeModal}
        title={"Credits"}
      >
        <div className="text-slate-500 text-start mt-8 leading-7">
          <p>Desarrollado por <LinkTag to={"https://github.com/JosenRomero"} text={"José Romero"} bgWhite={false} /></p>
          <p>PNG por <LinkTag to={"https://twitter.com/PMasterM"} text={"@PMasterM"} bgWhite={false} /></p>
          <p>Background por <LinkTag to={"https://www.svgbackgrounds.com/"} text={"SVGBackgrounds.com"} bgWhite={false} /></p>
        </div>
      </Modal>
    </>
  )

}

export default Credits
