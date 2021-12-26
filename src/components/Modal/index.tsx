import { FC, ReactEventHandler, useRef } from 'react'
import ReactDOM from 'react-dom'
import style from './style.module.sass'
interface ModalProps {
  onModalClose?: any
}

const Modal: FC<ModalProps> = ({ children, onModalClose, ...rest }) => {
  const modalRef = useRef<HTMLDivElement>(null)

  const handleModalClose = () => {
    onModalClose && onModalClose()
  }

  //TODO: find correct event type
  const handleClickRoot = (event: any) => {
    const rootElement = modalRef.current as HTMLDivElement
    if (!rootElement.contains(event.target)) {
      handleModalClose()
    }
  }

  return ReactDOM.createPortal(
    <div onMouseDown={handleClickRoot} className={style['root']}>
      <div ref={modalRef}>{children}</div>
    </div>,
    document.getElementById('modal') as HTMLElement
  )
}

export default Modal
