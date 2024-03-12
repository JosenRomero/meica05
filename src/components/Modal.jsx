import { Zoom } from 'react-awesome-reveal'

const Modal = ({ children, isOpen, closeModal, title }) => {

  const handleModalDialogClick = (e) => {
    e.stopPropagation();
  }

  return (
    <div className={`bg-black/75 fixed top-0 left-0 w-screen h-screen z-10 justify-center items-center ${isOpen ? 'grid' : 'hidden'}`} onClick={closeModal}>
      <Zoom>
        <div className="p-5 bg-white rounded-xl" onClick={handleModalDialogClick}>
          <div className="flex">
            <h2 className="text-center text-slate-500 grow">{ title }</h2>
            <button className="flex-none text-black" onClick={closeModal}>X</button>
          </div>
          { children }
        </div>
      </Zoom>
    </div>
  )

}

export default Modal
